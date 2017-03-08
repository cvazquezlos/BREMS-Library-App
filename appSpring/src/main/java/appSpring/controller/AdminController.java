package appSpring.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import appSpring.entity.Genre;
import appSpring.entity.Resource;
import appSpring.entity.ResourceType;
import appSpring.entity.User;
import appSpring.repository.GenreRepository;
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

	@RequestMapping("/admin/")
	public String home(Model model, HttpServletRequest request) {

		User loggedAdmin = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("admin", loggedAdmin);

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
	public String addUserAction(@RequestParam String name, @RequestParam String password,
							    @RequestParam String dni, @RequestParam String firstName,
							    @RequestParam String lastName1, @RequestParam String lastName2,
							    @RequestParam String email, @RequestParam String telephone,
							    HttpServletRequest request) {

		User user = new User(name, password, dni, firstName, lastName1, lastName2, email, telephone, "ROLE_USER");
		
		try{userRepository.save(user);}
		catch(Exception e){return "redirect:/admin/users/addError";}
		
		return "redirect:/admin/users";
	}
	
	@RequestMapping("/admin/users/addError")
	public String addError(Model model){
		model.addAttribute("alreadyReg",true);
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

		return "admin/loans_management";
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
                                    @RequestParam String author, @RequestParam String genre,
                                    @RequestParam String editorial, @RequestParam String resourceType,
                                    HttpServletRequest request) {

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
			resourceTypeRepository.save(new ResourceType(resourceType));
			resource.setProductType(resourceTypeRepository.findOneByName(resourceType));
		} else {
			resource.setProductType(resourceTypeFound);
		}
		resourceRepository.save(resource);

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
