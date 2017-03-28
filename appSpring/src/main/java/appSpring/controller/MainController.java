package appSpring.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import appSpring.model.Action;
import appSpring.model.Fine;
import appSpring.model.Resource;
import appSpring.model.ResourceType;
import appSpring.model.User;
import appSpring.repository.ActionRepository;
import appSpring.repository.ResourceCopyRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;
import appSpring.repository.UserRepository;
import appSpring.service.ActionService;
import appSpring.service.ResourceCopyService;


@Controller
public class MainController {

	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;
	//@Autowired
	//private ResourceCopyRepository resourceCopyRepo;
	@Autowired
	private UserRepository userRepository;
	//@Autowired
	//private ActionRepository actionRepository;
	
	// - services
	@Autowired
	private ResourceCopyService resourceCopyServ;
	
	@Autowired
	private ActionService actionServ;

	@RequestMapping("/")
	public String resources(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);
		ResourceType type;
		type = resourceTypeRepo.findOneByName("Libro");
		Page<Resource> books = resourceRepository.findByResourceType(type, new PageRequest(0, 2));
		type = resourceTypeRepo.findOneByName("Revista");
		Page<Resource> magazines = resourceRepository.findByResourceType(type, new PageRequest(0, 2));
		Page<Resource> allShelf = resourceRepository.findAll(new PageRequest(0, 2));
		model.addAttribute("books", books);
		model.addAttribute("magazines", magazines);
		model.addAttribute("all", allShelf);
		model.addAttribute("index", true);

		return "index";
	}

	@RequestMapping("/about")
	public String about(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);
		model.addAttribute("about", true);

		return "about";
	}

	@RequestMapping("/contact")
	public String contact(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);
		model.addAttribute("contact", true);

		return "contact";
	}

	@RequestMapping("/{id}/reserve")
	public String reserveResource(Model model, @PathVariable Integer id, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
		Calendar today = Calendar.getInstance();
		today.set(Calendar.HOUR_OF_DAY, 0);
		List<Fine> userPenalties = loggedUser.getPenalties();
		for (Fine penalty : userPenalties) {
			Date currentDate = new Date();
			if (currentDate.before(penalty.getFinishDate())) {
				redirectAttrs.addFlashAttribute("error",
						"Actualmente tiene una penalización. No es posible hacer la reserva.");
				return "redirect:/";
			}
		}
		if (loggedUser.getisBanned()){
			redirectAttrs.addFlashAttribute("error",
					"Actualmente tiene libros sin devolver fuera de plazo. No es posible hacer la reserva.");
			return "redirect:/";
		}
		if (loggedUser.getAvaibleLoans()==0) {
			redirectAttrs.addFlashAttribute("error", "Actualmente no puede reservar más recursos. El límite es de 3.");
			return "redirect:/";
		}
		Resource resourceSelected = resourceRepository.findOne(id);
		if (resourceSelected.getNoReservedCopies().isEmpty()) {
			resourceSelected.setAvaibleReserve(!resourceSelected.getAvaibleReserve());
			resourceRepository.save(resourceSelected);
			System.out.println(resourceRepository.findOne(resourceSelected.getId()).getAvaibleReserve());
			redirectAttrs.addFlashAttribute("error", "No existen copias suficientes del recurso. Inténtelo más tarde.");
			return "redirect:/";
		}
		List<Action> previousActions = loggedUser.getActions();
		for (Action action : previousActions) {
			if (action.getResource().getResource() == resourceSelected && action.getDateLoanReturn() == null) {
				redirectAttrs.addFlashAttribute("error", "Ya posee un préstamo reciente de este recurso.");
				return "redirect:/";
			}
		}
		LocalDateTime now = LocalDateTime.now();
		Date date = getDate(now.getYear(), now.getMonthValue(), now.getDayOfMonth(), now.getHour(), now.getMinute(), now.getSecond());
		
		Action reserve = new Action(date);
		reserve.setUser(loggedUser);
		
		ArrayList<String> avaibleCopies = resourceSelected.getNoReservedCopies();
		reserve.setResource(resourceCopyServ.findByLocationCode(avaibleCopies.get(0)));
		avaibleCopies.remove(0);
		actionServ.save(reserve);
		resourceSelected.setNoReservedCopies(avaibleCopies);
		resourceRepository.save(resourceSelected);
		loggedUser.setAvaibleLoans(loggedUser.getAvaibleLoans()-1);
		userRepository.save(loggedUser);
		if (resourceSelected.getNoReservedCopies().isEmpty()) {
			resourceSelected.setAvaibleReserve(!resourceSelected.getAvaibleReserve());
			resourceRepository.save(resourceSelected);
		}
		redirectAttrs.addFlashAttribute("messages", "La reserva se ha realizado correctamente.");

		return "redirect:/";
	}



	private static Date getDate(int year, int month, int day, int hour, int minute, int second) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.YEAR, year);
        cal.set(Calendar.MONTH, month);
        cal.set(Calendar.DAY_OF_MONTH, day);
        cal.set(Calendar.HOUR_OF_DAY, hour);
        cal.set(Calendar.MINUTE, minute);
        cal.set(Calendar.SECOND, second);
        cal.set(Calendar.MILLISECOND, 0);
        return cal.getTime();
    }

}
