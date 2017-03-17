package appSpring.controller;

import java.util.ArrayList;
import java.util.Calendar;
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

import appSpring.entity.Action;
import appSpring.entity.Fine;
import appSpring.entity.Resource;
import appSpring.entity.ResourceType;
import appSpring.entity.User;
import appSpring.repository.ActionRepository;
import appSpring.repository.ResourceCopyRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;
import appSpring.repository.UserRepository;

@Controller
public class MainController {

	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;
	@Autowired
	private ResourceCopyRepository resourceCopyRepo;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ActionRepository actionRepository;

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
			if ((today.getTime().after(penalty.getInitDate()) && today.getTime().before(penalty.getFinishDate()))) {
				redirectAttrs.addFlashAttribute("error",
						"Actualmente tiene una penalización. No es posible hacer la reserva.");
				return "redirect:/";
			}
		}
		if (loggedUser.getAvaibleLoans()==0) {
			redirectAttrs.addFlashAttribute("error", "Actualmente no puede reservar más recursos. El límite es de 3.");
			return "redirect:/";
		}
		Resource resourceSelected = resourceRepository.findOne(id);
		if (resourceSelected.getNoReservedCopies().isEmpty()) {
			redirectAttrs.addFlashAttribute("error",
					"No existen copias suficientes del recurso. Inténtelo más tarde.");
			return "redirect:/";
		}
		Action reserve = new Action(today.getTime());
		reserve.setUser(loggedUser);
		ArrayList<String> avaibleCopies = resourceSelected.getNoReservedCopies();
		reserve.setResource(resourceCopyRepo.findByLocationCode(avaibleCopies.get(0)));
		avaibleCopies.remove(0);
		actionRepository.save(reserve);
		resourceSelected.setNoReservedCopies(avaibleCopies);
		resourceRepository.save(resourceSelected);
		loggedUser.setAvaibleLoans(loggedUser.getAvaibleLoans()-1);
		userRepository.save(loggedUser);
		redirectAttrs.addFlashAttribute("messages", "La reserva se ha realizado correctamente.");

		return "redirect:/";
	}

}
