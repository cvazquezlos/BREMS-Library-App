package appSpring.controller;

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
public class ApiRestController {

	@Autowired
	private ResourceRepository resourceRepository;

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
