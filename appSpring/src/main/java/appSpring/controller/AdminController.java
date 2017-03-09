package appSpring.controller;

import java.util.Date;
import java.util.GregorianCalendar;
import java.io.File;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import appSpring.entity.Action;
import appSpring.entity.Genre;
import appSpring.entity.Resource;
import appSpring.entity.ResourceType;
import appSpring.entity.User;
import appSpring.repository.GenreRepository;
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
			@RequestParam String email, @RequestParam String telephone, HttpServletRequest request) {

		User user = new User(name, password, dni, firstName, lastName1, lastName2, email, telephone, "ROLE_USER");

		try {
			userRepository.save(user);
		} catch (Exception e) {
			return "redirect:/admin/users/addError";
		}

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
	public String editUserAction(Model model, @PathVariable Integer id, @RequestParam String firstName, @RequestParam String lastName1, @RequestParam String lastName2,
			@RequestParam String email, @RequestParam String dni, RedirectAttributes redirectAttrs) {

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
	public String deleteUser(Model model, @PathVariable Integer id, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
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
	public String deleteFine(Model model, @PathVariable Integer id, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
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
	public String addLoanAction(Model model, @RequestParam String title, @RequestParam int day, @RequestParam int month,
			@RequestParam int year, @RequestParam String user, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		Date date = new GregorianCalendar(year, month - 1, day).getTime();
		User userFound = userRepository.findByName(user);
		Resource resourceFound = resourceRepository.findByTitleLikeIgnoreCase("%" + title + "%");
		if (userFound == null) {
			model.addAttribute("errorUser", true);
			return "admin/add_loan";
		} else {
			if (resourceFound == null) {
				model.addAttribute("errorTitle", true);
				return "admin/add_loan";
			} else {
				Action action = new Action(date);
				action.setUser(userFound);
				actionRepository.save(action);
			}
		}

		return "redirect:/admin/loans";
	}

	@RequestMapping("/admin/loans/delete/{id}")
	public String deleteLoan(Model model, @PathVariable Integer id, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
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
			@RequestParam String resourceType, @RequestParam MultipartFile picture, HttpServletRequest request) {

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
			model.addAttribute("errorType", true);
			return "admin/add_resource";
		} else {
			resource.setProductType(resourceTypeFound);
		}

		resourceRepository.save(resource);

		// Add Picture
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
			@RequestParam String resourceType, @RequestParam MultipartFile picture, RedirectAttributes redirectAttrs) {

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
			model.addAttribute("errorType", true);
			return "admin/add_resource";
		} else {
			resource.setProductType(resourceTypeFound);
		}

		// Add Picture
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
		redirectAttrs.addFlashAttribute("messages", resource.getTitle().toString() + " modificado.");

		return "redirect:/admin/resources";
	}

	@RequestMapping("/admin/resources/delete/{id}")
	public String deleteResource(Model model, @PathVariable Integer id, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);
		resourceRepository.delete(id);

		return "redirect:/admin/resources";
	}

}
