package appSpring.controller;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import appSpring.entity.Genre;
import appSpring.entity.Resource;
import appSpring.entity.ResourceType;
import appSpring.entity.User;
import appSpring.repository.GenreRepository;
import appSpring.repository.PenaltyRepository;
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
	private PenaltyRepository penaltyRepository;
	@Autowired
	private GenreRepository genreRepository;

	@RequestMapping("/admin/")
	public String home(Model model) {

		return "admin/home";
	}

	@RequestMapping("/admin/users")
	public String users(Model model) {

		model.addAttribute("users", userRepository.findAll());

		return "admin/user_management";
	}

	@RequestMapping("/admin/users/add")
	public String addUser(Model model) {

		return "admin/add_user";
	}

	@RequestMapping("/admin/users/add/action")
	public String addUserAction(@RequestParam String name, @RequestParam String password,
			@RequestParam String dni, @RequestParam String firstName, @RequestParam String lastName1,
			@RequestParam String lastName2, @RequestParam String email, @RequestParam String telephone) {

		User user = new User(name, password, dni, firstName, lastName1, lastName2, email, telephone, "ROLE_USER");
		userRepository.save(user);

		return "redirect:/admin/users";
	}

	@RequestMapping("/admin/users/delete/{id}")
	public String deleteUser(@PathVariable Integer id) {

		userRepository.delete(id);

		return "redirect:/admin/users";
	}

	@RequestMapping("/admin/fines")
	public String fines(Model model) {

		model.addAttribute("fines", penaltyRepository.findAll());

		return "admin/fines_management";
	}

	@RequestMapping("/admin/loans")
	public String loans(Model model) {

		return "admin/loans_management";
	}

	@RequestMapping("/admin/resources")
	public String resources(Model model) {

		model.addAttribute("resources", resourceRepository.findAll());

		return "admin/resource_management";
	}

	@RequestMapping("/admin/resources/add")
	public String addResource(Model model) {

		return "admin/add_resource";
	}

	@RequestMapping("/admin/resources/add/action")
	public String addResourceAction(@RequestParam String title, @RequestParam String description,
                                    @RequestParam String author, @RequestParam String genre,
                                    @RequestParam String editorial, @RequestParam String resourceType,
                                    @RequestParam MultipartFile picture){

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
		
		// Add Picture
		String pictureName = resource.getId().toString() + ".jpg";

		if (!picture.isEmpty()) {
			try{
				File filesFolder = new File("src/main/resources/static/img/books");
				if (!filesFolder.exists()) {
					filesFolder.mkdirs();
				}

				File uploadedFile = new File(filesFolder.getAbsolutePath(), pictureName);
				picture.transferTo(uploadedFile);
			}catch (Exception e) {
			}
				
			resource.setPicture(pictureName);
			resourceRepository.save(resource);
		} 

		return "redirect:/admin/resources";
	}

	@RequestMapping("/admin/resources/delete/{id}")
	public String deleteResource(@PathVariable Integer id) {

		resourceRepository.delete(id);

		return "redirect:/admin/resources";
	}

}
