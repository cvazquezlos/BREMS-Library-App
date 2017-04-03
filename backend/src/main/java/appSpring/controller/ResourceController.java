package appSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import appSpring.model.Resource;
import appSpring.model.ResourceType;
import appSpring.service.ResourceCopyService;
import appSpring.service.ResourceService;
import appSpring.service.ResourceTypeService;

@Controller
public class ResourceController {

	@Autowired
	private ResourceService resourceService;
	@Autowired
	private ResourceTypeService resourceTypeService;
	@Autowired
	private ResourceCopyService resourceCopyService;

	@RequestMapping("/{id}")
	public String bookProfile(Model model, @PathVariable Integer id) {

		Resource resource = resourceService.findOne(id);
		Long num = resourceCopyService.countByResource(resource);
		List<Resource> similarResources = resourceService.findByGenreAndIdNot(resource.getGenre(), resource.getId());

		model.addAttribute("resource", resource);
		model.addAttribute("available", (num > 0) ? 1 : 0);
		model.addAttribute("similarResources", similarResources);
		model.addAttribute("index", true);

		return "profileBook";
	}

	@RequestMapping(value = "/moreBooks")
	public String moreBooks(Model model, @RequestParam int page) {

		ResourceType type = resourceTypeService.findByName("Libro");
		Page<Resource> books = resourceService.findByResourceType(type, new PageRequest(page, 2));
		model.addAttribute("items", books);

		return "listItemsPage";
	}

	@RequestMapping(value = "/moreMagazines")
	public String moreMagazines(Model model, @RequestParam int page) {

		ResourceType type = resourceTypeService.findByName("Revista");
		Page<Resource> revistas = resourceService.findByResourceType(type, new PageRequest(page, 2));
		model.addAttribute("items", revistas);

		return "listItemsPage";
	}

	@RequestMapping(value = "/moreAllShelf")
	public String moreAllShelf(Model model, @RequestParam int page) {

		Page<Resource> allShelf = resourceService.findAll(new PageRequest(page, 2));
		model.addAttribute("items", allShelf);

		return "listItemsPage";
	}

}
