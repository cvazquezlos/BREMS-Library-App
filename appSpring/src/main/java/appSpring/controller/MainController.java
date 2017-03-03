package appSpring.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;

@Controller
public class MainController {

	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;

	@PostConstruct
	public void init() {
	}

	@RequestMapping("/")
	public String books(Model model) {
		
		model.addAttribute("books", resourceRepository.findByResourceType(resourceTypeRepo.findOneByName("Libro")));
		model.addAttribute("magazines", resourceRepository.findByResourceType(resourceTypeRepo.findOneByName("Revista")));
		model.addAttribute("all", resourceRepository.findAll());

		return "index";
	}

}
