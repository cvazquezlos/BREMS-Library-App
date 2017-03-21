package appSpring.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.io.File;
import java.time.LocalDateTime;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import appSpring.entity.Action;
import appSpring.entity.Fine;
import appSpring.entity.Genre;
import appSpring.entity.Resource;
import appSpring.entity.ResourceCopy;
import appSpring.entity.ResourceType;
import appSpring.entity.User;
import appSpring.repository.GenreRepository;
import appSpring.repository.ResourceCopyRepository;
import appSpring.repository.ActionRepository;
import appSpring.repository.FineRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;
import appSpring.repository.UserRepository;

@Controller
public class AdminController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private ResourceTypeRepository resourceTypeRepository;
	@Autowired
	private ResourceCopyRepository resourceCopyRepository;
	@Autowired
	private FineRepository fineRepository;
	@Autowired
	private GenreRepository genreRepository;
	@Autowired
	private ActionRepository actionRepository;

	@RequestMapping("/admin/")
	public String home(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("resource", resourceRepository.findAll());
		model.addAttribute("action", actionRepository.findAll());
		model.addAttribute("user", userRepository.findAll());
		model.addAttribute("fine", fineRepository.findAll());

		return "admin/home";
	}

	@RequestMapping("/admin/users")
	public String users(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("users", userRepository.findAll());

		return "admin/user_management";
	}

	@RequestMapping("/admin/users/add")
	public String addUser(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);

		return "admin/add_user";
	}

	@RequestMapping("/admin/users/add/action")
	public String addUserAction(@RequestParam String name, @RequestParam String password, @RequestParam String dni,
			@RequestParam String firstName, @RequestParam String lastName1, @RequestParam String lastName2,
			@RequestParam String email, @RequestParam String telephone, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User user = new User(name, password, dni, firstName, lastName1, lastName2, email, telephone, "ROLE_USER");

		try {
			userRepository.save(user);
		} catch (Exception e) {
			return "redirect:/admin/users/addError";
		}
		redirectAttrs.addFlashAttribute("messages", "Añadido nuevo usuario.");

		return "redirect:/admin/users";
	}

	@RequestMapping("/admin/users/edit/{id}")
	public String editUser(Model model, @PathVariable Integer id, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		User user = userRepository.findOne(id);
		model.addAttribute("user", user);

		return "admin/edit_user";
	}

	@RequestMapping("/admin/users/edit/{id}/action")
	public String editUserAction(Model model, @PathVariable Integer id, @RequestParam String firstName,
			@RequestParam String lastName1, @RequestParam String lastName2, @RequestParam String email,
			@RequestParam String dni, RedirectAttributes redirectAttrs) {

		User user = userRepository.findOne(id);
		user.setFirstName(firstName);
		user.setLastName1(lastName1);
		user.setLastName2(lastName2);
		user.setEmail(email);
		user.setDni(dni);
		userRepository.save(user);
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

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		redirectAttrs.addFlashAttribute("messages", "Usuario eliminado.");
		userRepository.delete(id);

		return "redirect:/admin/users";
	}

	@RequestMapping("/admin/fines")
	public String fines(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("fines", fineRepository.findAll());

		return "admin/fines_management";
	}

	@RequestMapping("/admin/fines/delete/{id}")
	public String deleteFine(Model model, @PathVariable Integer id, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		redirectAttrs.addFlashAttribute("messages",
				"Multa eliminada al usuario " + fineRepository.findOne(id).getUserr().getName() + ".");
		fineRepository.delete(id);

		return "redirect:/admin/fines";
	}

	@RequestMapping("/admin/loans")
	public String loans(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("action", actionRepository.findAll());

		return "admin/loans_management";
	}

	@RequestMapping("/admin/loans/add")
	public String addLoan(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);

		return "admin/add_loan";
	}

	@RequestMapping("/admin/loans/add/action")
	public String addLoanAction(Model model, @RequestParam String title, @RequestParam String user,
			HttpServletRequest request, RedirectAttributes redirectAttrs) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		LocalDateTime now = LocalDateTime.now();
		Date date = getDate(now.getYear(), now.getMonthValue()-1, now.getDayOfMonth(), now.getHour(), now.getMinute(), now.getSecond());
		User userFound = userRepository.findByName(user);
		Resource resourceFound = resourceRepository.findByTitleLikeIgnoreCase("%" + title + "%");
		if (userFound == null) {
			model.addAttribute("messages", "No existe el usuario.");
			return "admin/add_loan";
		} else {
			List<Fine> userPenalties = userFound.getPenalties();
			for (Fine fine : userPenalties) {
				if (date.before(fine.getFinishDate())) {
					model.addAttribute("messages", "El usuario actualmente tiene una penalización. No es posible hacer la reserva.");
					return "admin/add_loan";
				}
			}
			if (userFound.getisBanned()){
				redirectAttrs.addFlashAttribute("error",
						"Actualmente tiene libros sin devolver fuera de plazo. No es posible hacer la reserva.");
				return "redirect:/";
			}
			if (userFound.getAvaibleLoans()==0) {
				model.addAttribute("messages", "Actualmente no puede reservar más recursos. El límite es de 3.");
				return "admin/add_loan";
			}
			if (resourceFound == null) {
				model.addAttribute("messages", "El título del recurso es erróneo.");
				return "admin/add_loan";
			} else {
				if (resourceFound.getNoReservedCopies().isEmpty()) {
					model.addAttribute("messages", "No existen copias suficientes del recurso. Inténtelo más tarde.");
					return "admin/add_loan";
				}
				List<Action> previousActions = userFound.getActions();
				for (Action action : previousActions) {
					if (action.getResource().getResource() == resourceFound && action.getDateLoanReturn() == null) {
						model.addAttribute("messages", "El usuario ya posee un préstamo de ese recurso.");
						return "admin/add_loan";
					}
				}
				Action reserve = new Action(date);
				reserve.setUser(userFound);
				ArrayList<String> avaibleCopies = resourceFound.getNoReservedCopies();
				reserve.setResource(resourceCopyRepository.findByLocationCode(avaibleCopies.get(0)));
				avaibleCopies.remove(0);
				actionRepository.save(reserve);
				resourceFound.setNoReservedCopies(avaibleCopies);
				resourceRepository.save(resourceFound);
				userFound.setAvaibleLoans(userFound.getAvaibleLoans()-1);
				userRepository.save(userFound);
			}
		}
		redirectAttrs.addFlashAttribute("messages", "Nuevo péstamo añadido al usuario " + userFound.getName() + ".");

		return "redirect:/admin/loans";
	}

	@RequestMapping("/admin/loans/{id}/return")
	public String returnResource(Model model, HttpServletRequest request, RedirectAttributes redirectAttrs,
			@PathVariable Integer id) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		LocalDateTime now = LocalDateTime.now();
		Date date = getDate(now.getYear(), now.getMonthValue()-1, now.getDayOfMonth(), now.getHour(), now.getMinute(), now.getSecond());
		Action action = actionRepository.findOne(id);
		if (action.getDateLoanGiven() == null) {
			redirectAttrs.addFlashAttribute("error", "El recurso debe ser entregado primero al usuario.");
			return "redirect:/admin/loans";
		} else if (action.getDateLoanReturn() != null) {
			redirectAttrs.addFlashAttribute("error", "El recurso ya ha sido devuelto con anterioridad.");
			return "redirect:/admin/loans";
		}
		User userFound = action.getUser();
		action.setDateLoanReturn(date);
		ResourceCopy copyNowAvaible = action.getResource();
		Resource resourceFound = copyNowAvaible.getResource();
		ArrayList<String> avaibleCopies = resourceFound.getNoReservedCopies();
		avaibleCopies.add(copyNowAvaible.getLocationCode());
		resourceFound.setNoReservedCopies(avaibleCopies);
		resourceFound.setAvaibleReserve(true);
		resourceRepository.save(resourceFound);
		userFound.setAvaibleLoans(userFound.getAvaibleLoans()+1);
		userFound.setBanned(false);
		Date resourceHaveToBeReturnedDate = action.getDateLoanGiven();
		resourceHaveToBeReturnedDate.setMinutes(resourceHaveToBeReturnedDate.getMinutes()+1);
		if(resourceHaveToBeReturnedDate.before(date)){
			Date banDate = new Date();
			banDate.setMinutes(banDate.getMinutes()+3);
			Fine userFine = new Fine(date, banDate, userFound, copyNowAvaible);
			fineRepository.save(userFine);
		}
		List<Action> currentActions = actionRepository.findByUser(action.getUser());
		for(Action currentAction : currentActions){
			Date date1 = currentAction.getDateLoanGiven();
    		if(date1==null) continue;
    		Date date3 = currentAction.getDateLoanReturn();
    		if(date3!=null) continue;
    		date1.setMinutes(date1.getMinutes()+1);
    		Date date2 = new Date();
    		if(date1.before(date2)){userFound.setBanned(true);}
		}
		
		userRepository.save(userFound);
		redirectAttrs.addFlashAttribute("messages", "El recurso ha sido devuelto correctamente.");

		return "redirect:/admin/loans";
	}

	@RequestMapping("/admin/loans/{id}/give")
	public String giveResource(Model model, HttpServletRequest request, RedirectAttributes redirectAttrs,
			@PathVariable Integer id) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		LocalDateTime now = LocalDateTime.now();
		Date date = getDate(now.getYear(), now.getMonthValue()-1, now.getDayOfMonth(), now.getHour(), now.getMinute(), now.getSecond());
		Action action = actionRepository.findOne(id);
		action.setDateLoanGiven(date);
		actionRepository.save(action);
		redirectAttrs.addFlashAttribute("messages", "El recurso ha sido entregado al usuario correctamente.");

		return "redirect:/admin/loans";
	}

	@RequestMapping("/admin/loans/delete/{id}")
	public String deleteLoan(Model model, @PathVariable Integer id, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Action selected = actionRepository.findOne(id);
		if (selected.getDateLoanGiven() != null && selected.getDateLoanReturn() == null) {
			redirectAttrs.addFlashAttribute("error", "El préstamo está en trámite. No es posible eliminarlo.");
			return "redirect:/admin/loans";
		}
		ResourceCopy loanCopy = selected.getResource();
		Resource associatedResource = loanCopy.getResource();
		associatedResource.getNoReservedCopies().add(loanCopy.getLocationCode());
		resourceRepository.save(associatedResource);
		redirectAttrs.addFlashAttribute("messages",
				"Préstamo del usuario " + actionRepository.findOne(id).getUser().getName() + " eliminado.");
		actionRepository.delete(id);

		return "redirect:/admin/loans";
	}

	@RequestMapping("/admin/resources")
	public String resources(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		model.addAttribute("resources", resourceRepository.findAll());

		return "admin/resource_management";
	}

	@RequestMapping("/admin/resources/add")
	public String addResource(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);

		return "admin/add_resource";
	}

	@RequestMapping("/admin/resources/add/action")
	public String addResourceAction(Model model, @RequestParam String title, @RequestParam String description,
			@RequestParam String author, @RequestParam String genre, @RequestParam String editorial,
			@RequestParam String resourceType, @RequestParam MultipartFile picture, HttpServletRequest request,
			RedirectAttributes redirectAttrs, @RequestParam int copiesNumber) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Resource resource = new Resource(title, author, editorial, description);

		Genre genreFound = genreRepository.findByName(genre);
		if (genreFound == null) {
			genreRepository.save(new Genre(genre));
			resource.setGenre(genreRepository.findByName(genre));
		} else {
			resource.setGenre(genreFound);
		}

		ResourceType resourceTypeFound = resourceTypeRepository.findOneByName(resourceType);
		if (resourceTypeFound == null) {
			model.addAttribute("messages", "El tipo de recurso es incorrecto. Introduce 'Libro' o 'Revista'.");
			return "admin/add_resource";
		} else {
			resource.setProductType(resourceTypeFound);
		}
		resourceRepository.save(resource);

		String pictureName = resource.getId().toString() + ".jpg";
		if (!picture.isEmpty()) {
			try {
				File filesFolder = new File("src/main/resources/static/img/books");
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				File uploadedFile = new File(filesFolder.getAbsolutePath(), pictureName);
				picture.transferTo(uploadedFile);
			} catch (Exception e) {
			}
			resource.setPicture(pictureName);
			resourceRepository.save(resource);
		}

		ResourceCopy copy;
		for (int i = 0; i < copiesNumber; i++) {
			copy = new ResourceCopy();
			copy.setResource(resource);
			copy.generatorCode();
			resourceCopyRepository.save(copy);
			copy.setLocationCode(copy.getLocationCode()+copy.getID());
			resourceCopyRepository.save(copy);
			resource.getNoReservedCopies().add(copy.getLocationCode());
		}
		resourceRepository.save(resource);
		redirectAttrs.addFlashAttribute("messages",
				resourceType + " con título " + resource.getTitle().toString() + " añadido.");

		return "redirect:/admin/resources";
	}

	@RequestMapping("/admin/resources/edit/{id}")
	public String editResource(Model model, @PathVariable Integer id, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Resource resource = resourceRepository.findOne(id);
		model.addAttribute("resource", resource);

		return "admin/edit_resource";
	}

	@RequestMapping("/admin/resources/edit/{id}/action")
	public String editResourceAction(Model model, @PathVariable Integer id, @RequestParam String description,
			@RequestParam String author, @RequestParam String genre, @RequestParam String editorial,
			@RequestParam String resourceType, @RequestParam MultipartFile picture, RedirectAttributes redirectAttrs,
			@RequestParam int copyNumber) {

		Resource resource = resourceRepository.findOne(id);
		resource.setDescription(description);
		resource.setAutor(author);
		resource.setEditorial(editorial);
		Genre genreFound = genreRepository.findByName(genre);
		if (genreFound == null) {
			genreRepository.save(new Genre(genre));
			resource.setGenre(genreRepository.findByName(genre));
		} else {
			resource.setGenre(genreFound);
		}
		ResourceType resourceTypeFound = resourceTypeRepository.findOneByName(resourceType);
		if (resourceTypeFound == null) {
			redirectAttrs.addFlashAttribute("error", "Tipo incorrecto. Introduzca Libro o Revista.");
			return "redirect:/admin/resources/edit/{id}";
		} else {
			resource.setProductType(resourceTypeFound);
		}
		String pictureName = resource.getId().toString() + ".jpg";
		if (!picture.isEmpty()) {
			try {
				File filesFolder = new File("src/main/resources/static/img/books");
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}
				File uploadedFile = new File(filesFolder.getAbsolutePath(), pictureName);
				picture.transferTo(uploadedFile);
			} catch (Exception e) {
			}
			resource.setPicture(pictureName);
		}
		resourceRepository.save(resource);

		if (copyNumber < resource.getResourceCopies().size()) {
			if ((resource.getResourceCopies().size() - copyNumber) <= resource.getNoReservedCopies().size()) {
				ArrayList<String> avaibleCopies = resource.getNoReservedCopies();
				List<ResourceCopy> copies = resource.getResourceCopies();
				int counter = copies.size() - copyNumber;
				for (int i = 0; i < counter; i++) {
					ResourceCopy copy = resourceCopyRepository.findByLocationCode(avaibleCopies.get(0));
					copies.remove(copy);
					resourceCopyRepository.delete(copy);
					avaibleCopies.remove(0);
				}
				resource.setNoReservedCopies(avaibleCopies);
				resource.setResourceCopies(copies);
				resourceRepository.save(resource);
				/*ArrayList<String> avaibleCopies = resource.getNoReservedCopies();
				List<ResourceCopy> copies = resource.getResourceCopies();
				for (int i = 0; i < (copyNumber - resource.getNoReservedCopies().size()); i++) {
					ResourceCopy copy = resourceCopyRepository.findByLocationCode(avaibleCopies.get(0));
					copies.remove(copy);
					resourceCopyRepository.delete(copy);
					avaibleCopies.remove(0);
				}
				resource.setNoReservedCopies(avaibleCopies);
				resource.setResourceCopies(copies);
				resourceRepository.save(resource);
			} else if (copyNumber < resource.getNoReservedCopies().size()){*/
			} else {
				redirectAttrs.addFlashAttribute("error", "Actualmente hay copias en préstamo. El cambio no es posible.");
				return "redirect:/admin/resources/edit/{id}";
			}
		} else if (copyNumber > resource.getResourceCopies().size()) {
			for (int i = 0; i < (copyNumber - resource.getResourceCopies().size()); i++) {
				ResourceCopy copy = new ResourceCopy();
				copy.setResource(resource);
				copy.generatorCode();
				resourceCopyRepository.save(copy);
				copy.setLocationCode(copy.getLocationCode()+copy.getID());
				resourceCopyRepository.save(copy);
				resource.getNoReservedCopies().add(copy.getLocationCode());
				resourceRepository.save(resource);
			}
		}

		redirectAttrs.addFlashAttribute("messages", resource.getTitle().toString() + " modificado.");

		return "redirect:/admin/resources";
	}

	@RequestMapping("/admin/resources/delete/{id}")
	public String deleteResource(Model model, @PathVariable Integer id, HttpServletRequest request,
			RedirectAttributes redirectAttrs) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Resource resourceSelected = resourceRepository.findOne(id);
		List<Action> actions = actionRepository.findAll();
		for (Action action : actions) {
			if (action.getResource().getResource().getId() == id)
				actionRepository.delete(action);
		}
		resourceRepository.delete(resourceSelected);
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
