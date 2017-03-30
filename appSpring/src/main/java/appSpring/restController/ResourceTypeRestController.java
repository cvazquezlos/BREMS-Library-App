package appSpring.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import appSpring.model.ResourceType;
import appSpring.service.ResourceTypeService;

@RestController
@RequestMapping("/api/resourcetypes")
public class ResourceTypeRestController {

	@Autowired
	private ResourceTypeService resourceTypeService;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public ResourceType postResourceType(@RequestBody ResourceType resourceType) {

		resourceTypeService.save(resourceType);

		return resourceType;
	}

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<ResourceType>> getResourceTypes() {

		List<ResourceType> resourceTypes = resourceTypeService.findAll();
		if (resourceTypes != null) {
			return new ResponseEntity<>(resourceTypes, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResourceType> getResourceType(@PathVariable Integer id) {

		ResourceType resourceType = resourceTypeService.findOne(id);
		if (resourceType != null) {
			return new ResponseEntity<>(resourceType, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<ResourceType> deleteResourceType(@PathVariable Integer id) {

		ResourceType resourceTypeSelected = resourceTypeService.findOne(id);
		if (resourceTypeSelected == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			resourceTypeService.delete(resourceTypeSelected);
			return new ResponseEntity<>(resourceTypeSelected, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<ResourceType> putResourceType(@PathVariable Integer id, @RequestBody ResourceType resourceTypeUpdated) {

		ResourceType resourceType = resourceTypeService.findOne(id);
		if ((resourceType != null) && (resourceType.getId() == resourceTypeUpdated.getId())) {
			resourceTypeService.save(resourceTypeUpdated);
			return new ResponseEntity<>(resourceTypeUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
