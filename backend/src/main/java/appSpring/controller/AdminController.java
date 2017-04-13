package appSpring.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.io.IOException;
import java.time.LocalDateTime;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import appSpring.model.Action;
import appSpring.model.Genre;
import appSpring.model.ImagesPath;
import appSpring.model.Resource;
import appSpring.model.ResourceCopy;
import appSpring.model.ResourceType;
import appSpring.model.User;
import appSpring.service.ActionService;
import appSpring.service.FineService;
import appSpring.service.GenreService;
import appSpring.service.LogicService;
import appSpring.service.ResourceCopyService;
import appSpring.service.ResourceService;
import appSpring.service.ResourceTypeService;
import appSpring.service.UserService;

@Controller
public class AdminController {

	@Autowired
	private UserService userService;
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private ResourceTypeService resourceTypeService;
	@Autowired
	private ResourceCopyService resourceCopyService;
	@Autowired
	private FineService fineService;
	@Autowired
	private GenreService genreService;
	@Autowired
	private ActionService actionService;
	@Autowired
	private LogicService logicService;

	@RequestMapping("/admin/")
	public String home(Model model, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("resource", resourceService.findAll());
		model.addAttribute("action", actionService.findAll());
		model.addAttribute("user", userService.findAll());
		model.addAttribute("fine", fineService.findAll());

		return "admin/home";
	}

	@RequestMapping("/admin/users")
	public String users(Model model, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("users", userService.findAll());

		return "admin/user_management";
	}

	@RequestMapping("/admin/users/add")
	public String addUser(Model model, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);

		return "admin/add_user";
	}

	@RequestMapping("/admin/users/add/action")
	public String addUserAction(@RequestParam String name, @RequestParam String password, @RequestParam String dni,
			@RequestParam String firstName, @RequestParam String lastName1, @RequestParam String lastName2,
			@RequestParam String email, @RequestParam String telephone, HttpServletRequest request,
			RedirectAttributes redirectAttrs, Model model) {

		User user = new User(name, password, dni, firstName, lastName1, lastName2, email, telephone, "ROLE_USER");
		switch (logicService.createAnUser(user)) {
		case 1:
			model.addAttribute("messages", "Ya existe un usuario con el mismo nick.");
			return "admin/add_user";
		case 2:
			model.addAttribute("messages", "Ya existe un usuario con el mismo correo electrónico.");
			return "admin/add_user";
		case 3:
			model.addAttribute("messages", "Es necesario introducir una contraseña.");
			return "admin/add_user";
		case 0:
			redirectAttrs.addFlashAttribute("messages", "Añadido nuevo usuario.");
			return "redirect:/admin/users";
		default:
			model.addAttribute("messages", "Error interno.");
			return "admin/add_user";
		}
	}

	@RequestMapping("/admin/users/edit/{id}")
	public String editUser(Model model, @PathVariable Integer id, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		User user = userService.findOne(id);
		model.addAttribute("user", user);

		return "admin/edit_user";
	}

	@RequestMapping("/admin/users/edit/{id}/action")
	public String editUserAction(Model model, @PathVariable Integer id, @RequestParam String firstName,
			@RequestParam String lastName1, @RequestParam String lastName2, @RequestParam String email,
			@RequestParam String dni, RedirectAttributes redirectAttrs) {

		User user = userService.findOne(id);
		user.setFirstName(firstName);
		user.setLastName1(lastName1);
		user.setLastName2(lastName2);
		user.setEmail(email);
		user.setDni(dni);
		userService.save(user);
		redirectAttrs.addFlashAttribute("messages", user.getName().toString() + " modificado.");

		return "redirect:/admin/users";
	}

	@RequestMapping("/admin/users/addError")
	public String addError(Model model) {
		model.addAttribute("alreadyReg", true);

		return "admin/add_user";
	}

	@RequestMapping("/admin/users/delete/{id}")
	public String deleteUser(Model model, @PathVariable Integer id, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		userService.delete(id);
		redirectAttrs.addFlashAttribute("messages", "Usuario eliminado.");

		return "redirect:/admin/users";
	}

	@RequestMapping("/admin/fines")
	public String fines(Model model, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("fines", fineService.findAll());

		return "admin/fines_management";
	}

	@RequestMapping("/admin/fines/delete/{id}")
	public String deleteFine(Model model, @PathVariable Integer id, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		redirectAttrs.addFlashAttribute("messages",
				"Multa eliminada al usuario " + fineService.findOne(id).getUser().getName() + ".");
		fineService.delete(id);

		return "redirect:/admin/fines";
	}

	@RequestMapping("/admin/loans")
	public String loans(Model model, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("action", actionService.findAll());

		return "admin/loans_management";
	}

	@RequestMapping("/admin/loans/add")
	public String addLoan(Model model, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);

		return "admin/add_loan";
	}

	@RequestMapping("/admin/loans/add/action")
	public String addLoanAction(Model model, @RequestParam String title, @RequestParam String user,
			HttpServletRequest request, RedirectAttributes redirectAttrs) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		LocalDateTime now = LocalDateTime.now();
		Date date = getDate(now.getYear(), now.getMonthValue() - 1, now.getDayOfMonth(), now.getHour(), now.getMinute(),
				now.getSecond());
		User userFound = userService.findByName(user);
		Resource resourceFound = resourceService.findByTitleLikeIgnoreCase("%" + title + "%");
		switch (logicService.reserveAResource(userFound, date, resourceFound, null)) {
		case 0:
			redirectAttrs.addFlashAttribute("messages", "Nuevo péstamo añadido al usuario " + userFound.getName() + ".");
			return "redirect:/admin/loans";
		case 1:
			model.addAttribute("messages", "No existe el usuario.");
			return "admin/add_loan";
		case 2:
			model.addAttribute("messages", "El título del recurso es erróneo.");
			return "admin/add_loan";
		case 3:
			model.addAttribute("messages",
					"El usuario actualmente tiene una penalización. No es posible hacer la reserva.");
			return "admin/add_loan";
		case 4:
			model.addAttribute("messages", "Actualmente tiene libros sin devolver fuera de plazo. No es posible hacer la reserva.");
			return "admin/add_loan";
		case 5:
			model.addAttribute("messages", "Actualmente no puede reservar más recursos. El límite es de 3.");
			return "admin/add_loan";
		case 6:
			model.addAttribute("messages", "No existen copias suficientes del recurso. Inténtelo más tarde.");
			return "admin/add_loan";
		case 7:
			model.addAttribute("messages", "El usuario ya posee un préstamo de ese recurso.");
			return "admin/add_loan";
		default:
			model.addAttribute("messages", "Error interno.");
			return "admin/add_loan";
		}
	}

	@RequestMapping("/admin/loans/{id}/return")
	public String returnResource(Model model, HttpServletRequest request, RedirectAttributes redirectAttrs,
			@PathVariable Integer id) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		LocalDateTime now = LocalDateTime.now();
		Date date = getDate(now.getYear(), now.getMonthValue() - 1, now.getDayOfMonth(), now.getHour(), now.getMinute(),
				now.getSecond());
		Action action = actionService.findOne(id);
		switch(logicService.addReturnDate(action, date)){
		case 1:
			redirectAttrs.addFlashAttribute("error", "Realice primero la entrega o no vuelva a realizar la devolución.");
			return "redirect:/admin/loans";
		case 0:
			redirectAttrs.addFlashAttribute("messages", "El recurso ha sido devuelto correctamente.");
			return "redirect:/admin/loans";
		default:
			redirectAttrs.addFlashAttribute("error", "Error interno.");
			return "redirect:/admin/loans";
		}
	}

	@RequestMapping("/admin/loans/{id}/give")
	public String giveResource(Model model, HttpServletRequest request, RedirectAttributes redirectAttrs,
			@PathVariable Integer id) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		LocalDateTime now = LocalDateTime.now();
		Date date = getDate(now.getYear(), now.getMonthValue() - 1, now.getDayOfMonth(), now.getHour(), now.getMinute(),
				now.getSecond());
		Action action = actionService.findOne(id);
		switch(logicService.addGiveDate(action, date)){
		case 1:
			redirectAttrs.addFlashAttribute("error", "No es posible entregar este recurso.");
			return "redirect:/admin/loans";
		case 0:
			redirectAttrs.addFlashAttribute("messages", "El recurso ha sido entregado al usuario correctamente.");
			return "redirect:/admin/loans";
		default:
			redirectAttrs.addFlashAttribute("error", "Error interno.");
			return "redirect:/admin/loans";
		}
	}

	@RequestMapping("/admin/loans/delete/{id}")
	public String deleteLoan(Model model, @PathVariable Integer id, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Action selected = actionService.findOne(id);
		switch(logicService.deleteALoan(selected)) {
		case 0:
			redirectAttrs.addFlashAttribute("messages",
					"Préstamo del usuario " + actionService.findOne(id).getUser().getName() + " eliminado.");
			return "redirect:/admin/loans";
		case 1:
			redirectAttrs.addFlashAttribute("error", "El préstamo está en trámite. No es posible eliminarlo.");
			return "redirect:/admin/loans";
		default:
			redirectAttrs.addFlashAttribute("error", "Error interno.");
			return "redirect:/admin/loans";
		}
	}

	@RequestMapping("/admin/resources")
	public String resources(Model model, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("resources", resourceService.findAll());

		return "admin/resource_management";
	}

	@RequestMapping("/admin/resources/add")
	public String addResource(Model model, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);

		return "admin/add_resource";
	}

	@RequestMapping("/admin/resources/add/action")
	public String addResourceAction(Model model, @RequestParam String title, @RequestParam String description,
			@RequestParam String author, @RequestParam String genre, @RequestParam String editorial,
			@RequestParam String resourceType, @RequestParam MultipartFile picture, HttpServletRequest request,
			RedirectAttributes redirectAttrs, @RequestParam int copiesNumber) throws IOException {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Resource resource = new Resource(title, author, editorial, description);

		Genre genreFound = genreService.findByName(genre);
		if (genreFound == null) {
			genreService.save(new Genre(genre));
			resource.setGenre(genreService.findByName(genre));
		} else {
			resource.setGenre(genreFound);
		}

		ResourceType resourceTypeFound = resourceTypeService.findByName(resourceType);
		if (resourceTypeFound == null) {
			model.addAttribute("messages", "El tipo de recurso es incorrecto. Introduce 'Libro' o 'Revista'.");
			return "admin/add_resource";
		} else {
			resource.setProductType(resourceTypeFound);
		}
		resourceService.save(resource);

		String filename = resourceService.handleUploadImagetoDatabase(picture, resource.getId(), 
					ImagesPath.IMAGES_RESOURCE.toString());
		resource.setPicture(filename);
		resource.setHasPhoto(true);
		System.out.println("TODO OK");
		resourceService.save(resource);

		ResourceCopy copy;
		for (int i = 0; i < copiesNumber; i++) {
			copy = new ResourceCopy();
			copy.setResource(resource);
			copy.generatorCode();
			resourceCopyService.save(copy);
			copy.setLocationCode(copy.getLocationCode() + copy.getID());
			resourceCopyService.save(copy);
			resource.getNoReservedCopies().add(copy.getLocationCode());
			resource.getResourceCopies().add(copy);
		}
		resourceService.save(resource);
		redirectAttrs.addFlashAttribute("messages",
				resourceType + " con título " + resource.getTitle().toString() + " añadido.");

		return "redirect:/admin/resources";
	}

	@RequestMapping("/admin/resources/edit/{id}")
	public String editResource(Model model, @PathVariable Integer id, HttpServletRequest request) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Resource resource = resourceService.findOne(id);
		model.addAttribute("resource", resource);

		return "admin/edit_resource";
	}

	@RequestMapping("/admin/resources/edit/{id}/action")
	public String editResourceAction(Model model, @PathVariable Integer id, @RequestParam String description,
			@RequestParam String author, @RequestParam String genre, @RequestParam String editorial,
			@RequestParam String resourceType, @RequestParam MultipartFile picture, RedirectAttributes redirectAttrs,
			@RequestParam int copyNumber) throws IOException {

		Resource resource = resourceService.findOne(id);
		resource.setDescription(description);
		resource.setAutor(author);
		resource.setEditorial(editorial);
		Genre genreFound = genreService.findByName(genre);
		if (genreFound == null) {
			genreService.save(new Genre(genre));
			resource.setGenre(genreService.findByName(genre));
		} else {
			resource.setGenre(genreFound);
		}
		ResourceType resourceTypeFound = resourceTypeService.findByName(resourceType);
		if (resourceTypeFound == null) {
			redirectAttrs.addFlashAttribute("error", "Tipo incorrecto. Introduzca Libro o Revista.");
			return "redirect:/admin/resources/edit/{id}";
		} else {
			resource.setProductType(resourceTypeFound);
		}

		String filename = resourceService.handleUploadImagetoDatabase(picture, resource.getId(), 
					ImagesPath.IMAGES_RESOURCE.toString());
		resource.setPicture(filename);
		resource.setHasPhoto(true);
		System.out.println("TODO OK");
		resourceService.save(resource);

		if (copyNumber < resource.getResourceCopies().size()) {
			if ((resource.getResourceCopies().size() - copyNumber) <= resource.getNoReservedCopies().size()) {
				ArrayList<String> avaibleCopies = resource.getNoReservedCopies();
				List<ResourceCopy> copies = resource.getResourceCopies();
				int counter = copies.size() - copyNumber;
				for (int i = 0; i < counter; i++) {
					ResourceCopy copy = resourceCopyService.findByLocationCode(avaibleCopies.get(0));
					copies.remove(copy);
					resourceCopyService.delete(copy);
					avaibleCopies.remove(0);
				}
				resource.setNoReservedCopies(avaibleCopies);
				resource.setResourceCopies(copies);
				resourceService.save(resource);
			} else {
				redirectAttrs.addFlashAttribute("error",
						"Actualmente hay copias en préstamo. El cambio no es posible.");
				return "redirect:/admin/resources/edit/{id}";
			}
		} else if (copyNumber > resource.getResourceCopies().size()) {
			for (int i = 0; i < (copyNumber - resource.getResourceCopies().size()); i++) {
				ResourceCopy copy = new ResourceCopy();
				copy.setResource(resource);
				copy.generatorCode();
				resourceCopyService.save(copy);
				copy.setLocationCode(copy.getLocationCode() + copy.getID());
				resourceCopyService.save(copy);
				resource.getNoReservedCopies().add(copy.getLocationCode());
				resourceService.save(resource);
			}
		}
		redirectAttrs.addFlashAttribute("messages", resource.getTitle().toString() + " modificado.");

		return "redirect:/admin/resources";
	}

	@RequestMapping("/admin/resources/delete/{id}")
	public String deleteResource(Model model, @PathVariable Integer id, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User loggedAdmin = userService.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Resource resourceSelected = resourceService.findOne(id);
		List<Action> actions = actionService.findAll();
		for (Action action : actions) {
			if (action.getResource().getResource().getId() == id)
				actionService.delete(action);
		}
		resourceService.delete(resourceSelected);
		redirectAttrs.addFlashAttribute("messages", "Recurso eliminado.");

		return "redirect:/admin/resources";
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
