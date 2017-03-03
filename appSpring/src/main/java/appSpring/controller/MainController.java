package appSpring.controller;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import appSpring.entity.User;
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
	private UserRepository userRepository;

	@PostConstruct
	public void init() {
	}

	@RequestMapping("/")
	public String resources(Model model, HttpServletRequest request) {
		
		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
		}
		model.addAttribute("index", true);
		model.addAttribute("books", resourceRepository.findByResourceType(resourceTypeRepo.findOneByName("Libro")));
		model.addAttribute("magazines", resourceRepository.findByResourceType(resourceTypeRepo.findOneByName("Revista")));
		model.addAttribute("all", resourceRepository.findAll());

		return "index";
	}

	@RequestMapping("/about")
	public String about(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
		}
		model.addAttribute("about", true);

		return "about";
	}

	@RequestMapping("/contact")
	public String contact(Model model, HttpServletRequest request) {

		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
		}
		model.addAttribute("contact", true);

		return "contact";
	}

}
