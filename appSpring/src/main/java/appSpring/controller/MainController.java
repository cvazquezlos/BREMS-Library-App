package appSpring.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import appSpring.repository.GenreRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;
import appSpring.entity.*;

@Controller
public class MainController {

	@Autowired
	private ResourceRepository resourceRepo;
	@Autowired
	private GenreRepository genreRepo;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;

	@PostConstruct
	public void init() {
	}

	@RequestMapping("/")
	public String books(Model model) {
		
		model.addAttribute("books", resourceRepo.findByResourceType(resourceTypeRepo.findOneByName("Libro")));
		model.addAttribute("magazines", resourceRepo.findByResourceType(resourceTypeRepo.findOneByName("Revista")));
		model.addAttribute("all", resourceRepo.findAll());

		return "index";
	}

}
