package appSpring.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.controller.ResourceController.ResourceDetail;
import appSpring.entity.Resource;
import appSpring.repository.ResourceRepository;

@RestController
@RequestMapping("/api/resources")
public class ResourceRestController {
	
	@Autowired
	private ResourceRepository resourceRepository;
	
	/*
	 * Create new resource
	 */
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Resource postResource(@RequestBody Resource resource) {

		resourceRepository.save(resource);

		return resource;
	}

	/*
	 * Get existing resource
	 */
	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Resource> getResource(@PathVariable int id) {

		Resource resource = resourceRepository.findOne(id);
		
		if (resource != null) {
			return new ResponseEntity<>(resource, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	/*
	 * Delete resource 
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Resource> deleteResource(@PathVariable Integer id) {

		Resource resourceSelected = resourceRepository.findOne(id);
		if (resourceSelected == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			resourceRepository.delete(resourceSelected);
			return new ResponseEntity<>(resourceSelected, HttpStatus.OK);
		}
	}
	
	/*
	 * Modify resource
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Resource> putResource(@PathVariable Integer id, @RequestBody Resource resourceUpdated) {

		Resource resource = resourceRepository.findOne(id);
		
		if (resource != null) {
			
			resource.setAutor(resourceUpdated.getAutor());
			resource.setDescription(resourceUpdated.getDescription());
			resource.setEditorial(resourceUpdated.getEditorial());
			resource.setPicture(resourceUpdated.getPicture());
			
			resourceRepository.save(resource);
			
			return new ResponseEntity<>(resource, HttpStatus.OK);
			
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
