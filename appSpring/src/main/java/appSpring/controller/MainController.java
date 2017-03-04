package appSpring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import appSpring.entity.Resource;
import appSpring.entity.ResourceType;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;

@Controller
public class MainController {

	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;

	@RequestMapping("/")
	public String books(Model model) {
		
		ResourceType type;
		
		//model.addAttribute("books", resourceRepository.findByResourceType(resourceTypeRepo.findOneByName("Libro")));
		//model.addAttribute("magazines", resourceRepository.findByResourceType(resourceTypeRepo.findOneByName("Revista")));
		
		
		type = resourceTypeRepo.findOneByName("Libro");
		Page<Resource> books = resourceRepository.findByResourceType(type, new PageRequest(0,1));
		
		type = resourceTypeRepo.findOneByName("Revista");
		Page<Resource> magazines = resourceRepository.findByResourceType(type, new PageRequest(0,1));
		
		Page<Resource> allShelf = resourceRepository.findAll(new PageRequest(0,1));
		
		model.addAttribute("books", books);
		model.addAttribute("magazines", magazines);
		model.addAttribute("all", allShelf);
		model.addAttribute("index", true);

		return "index";
	}
	
	@RequestMapping("/about")
	public String aboutPage(Model model) {

		model.addAttribute("about", true);

		return "about";
	}

	@RequestMapping("/contact")
	public String contactPage(Model model) {

		model.addAttribute("contact", true);

		return "contact";
	}

}