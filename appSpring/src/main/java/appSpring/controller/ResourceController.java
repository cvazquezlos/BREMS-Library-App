package appSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.repository.ResourceCopyRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;
import appSpring.entity.Genre;
import appSpring.entity.Resource;
import appSpring.entity.ResourceCopy;
import appSpring.entity.ResourceType;

@RestController
public class ResourceController {

	interface ResourceDetail extends Resource.Basic, Resource.ResoType, Resource.Genr, Resource.ResoCopy, ResourceCopy.Basic, Genre.Basic, ResourceType.Basic {}

	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;
	@Autowired
	private ResourceCopyRepository resourceCopyRepo;

	@RequestMapping("/{id}")
	public String bookProfile(Model model, @PathVariable Integer id) {

		Resource resource = resourceRepository.findOne(id);
		Long num = resourceCopyRepo.countByResource(resource);
		List<Resource> similarResources = resourceRepository.findByGenreAndIdNot(resource.getGenre(), resource.getId());

		model.addAttribute("resource", resource);
		model.addAttribute("available", (num > 0) ? 1 : 0);
		model.addAttribute("similarResources", similarResources);
		model.addAttribute("index", true);

		return "profileBook";
	}

	@RequestMapping(value = "/moreBooks")
	public String moreBooks(Model model, @RequestParam int page) {

		ResourceType type = resourceTypeRepo.findOneByName("Libro");
		Page<Resource> books = resourceRepository.findByResourceType(type, new PageRequest(page, 2));
		model.addAttribute("items", books);

		return "listItemsPage";
	}

	@RequestMapping(value = "/moreMagazines")
	public String moreMagazines(Model model, @RequestParam int page) {

		ResourceType type = resourceTypeRepo.findOneByName("Revista");
		Page<Resource> revistas = resourceRepository.findByResourceType(type, new PageRequest(page, 2));
		model.addAttribute("items", revistas);

		return "listItemsPage";
	}

	@RequestMapping(value = "/moreAllShelf")
	public String moreAllShelf(Model model, @RequestParam int page) {

		Page<Resource> allShelf = resourceRepository.findAll(new PageRequest(page, 2));
		model.addAttribute("items", allShelf);

		return "listItemsPage";
	}

	// API REST METHODS
	@RequestMapping(value = "/api/resources", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Resource postResource(@RequestBody Resource resource) {

		resourceRepository.save(resource);

		return resource;
	}

	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/api/resources/{id}", method = RequestMethod.GET)
	public ResponseEntity<Resource> getResource(@PathVariable Integer id) {

		Resource resourceSelected = resourceRepository.findOne(id);
		if (resourceSelected == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(resourceSelected, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/api/resources/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Resource> deleteResource(@PathVariable Integer id) {

		Resource resourceSelected = resourceRepository.findOne(id);
		if (resourceSelected == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			resourceRepository.delete(resourceSelected);
			return new ResponseEntity<>(resourceSelected, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/api/resources/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Resource> putResource(@PathVariable Integer id, @RequestBody Resource resourceUpdated) {

		Resource resourceSelected = resourceRepository.findOne(id);
		if (resourceSelected == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			resourceRepository.save(resourceSelected);
			return new ResponseEntity<>(resourceSelected, HttpStatus.OK);
		}
	}

}
