package appSpring.controller;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import appSpring.model.Resource;
import appSpring.model.ResourceType;
import appSpring.model.User;

import appSpring.service.LogicService;
import appSpring.service.ResourceService;
import appSpring.service.ResourceTypeService;
import appSpring.service.UserService;

@Controller
public class MainController {

	@Autowired
	private UserService userService;
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private ResourceTypeService resourceTypeService;
	@Autowired
	private LogicService logicService;

	@RequestMapping("/")
	public String resources(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userService.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);
		ResourceType type;
		type = resourceTypeService.findByName("Libro");
		Page<Resource> books = resourceService.findByResourceType(type, new PageRequest(0, 2));
		type = resourceTypeService.findByName("Revista");
		Page<Resource> magazines = resourceService.findByResourceType(type, new PageRequest(0, 2));
		Page<Resource> allShelf = resourceService.findAll(new PageRequest(0, 2));
		model.addAttribute("books", books);
		model.addAttribute("magazines", magazines);
		model.addAttribute("all", allShelf);
		model.addAttribute("index", true);

		return "index";
	}

	@RequestMapping("/about")
	public String about(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userService.findByName(request.getUserPrincipal().getName());
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
			User loggedUser = userService.findByName(request.getUserPrincipal().getName());
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

		User loggedUser = userService.findByName(request.getUserPrincipal().getName());
		LocalDateTime now = LocalDateTime.now();
		Date date = getDate(now.getYear(), now.getMonthValue() -1, now.getDayOfMonth(), now.getHour(), now.getMinute(), now.getSecond());
		Resource resourceSelected = resourceService.findOne(id);
		switch (logicService.reserveAResource(loggedUser, date, resourceSelected, null)) {
		case 0:
			redirectAttrs.addFlashAttribute("messages", "La reserva se ha realizado correctamente.");
			return "redirect:/";
		case 1:
			model.addAttribute("messages", "No existe el usuario.");
			return "admin/add_loan";
		case 2:
			model.addAttribute("messages", "El título del recurso es erróneo.");
			return "admin/add_loan";
		case 3:
			redirectAttrs.addFlashAttribute("error",
					"Actualmente tiene una penalización. No es posible hacer la reserva.");
			return "redirect:/";
		case 4:
			redirectAttrs.addFlashAttribute("error",
					"Actualmente tiene libros sin devolver fuera de plazo. No es posible hacer la reserva.");
			return "redirect:/";
		case 5:
			redirectAttrs.addFlashAttribute("error", "Actualmente no puede reservar más recursos. El límite es de 3.");
			return "redirect:/";
		case 6:
			redirectAttrs.addFlashAttribute("error", "No existen copias suficientes del recurso. Inténtelo más tarde.");
			return "redirect:/";
		case 7:
			redirectAttrs.addFlashAttribute("error", "Ya posee un préstamo reciente de este recurso.");
			return "redirect:/";
		default:
			model.addAttribute("messages", "Error interno.");
			return "admin/add_loan";
		}
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
