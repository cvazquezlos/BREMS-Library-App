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

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.model.Action;
import appSpring.model.Genre;
import appSpring.model.Resource;
import appSpring.model.ResourceCopy;
import appSpring.model.ResourceType;
import appSpring.service.ActionService;
import appSpring.service.ResourceService;

@RestController
@RequestMapping("/api/resources")
public class ResourceRestController {

	public interface ResourceDetail extends Resource.Basic, Resource.ResoType, Resource.Genr, Resource.ResoCopy, ResourceCopy.Basic, Genre.Basic, ResourceType.Basic {}
	
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private ActionService actionService;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Resource postResource(@RequestBody Resource resource) {

		resourceService.save(resource);

		return resource;
	}

	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<List<Resource>> getAllResource() {
		
		List<Resource> resources = resourceService.findAll();
		if (resources != null) {
			return new ResponseEntity<>(resources, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Resource> getResource(@PathVariable int id) {

		Resource resource = resourceService.findOne(id);
		if (resource != null) {
			return new ResponseEntity<>(resource, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/genre/{name}", method = RequestMethod.GET)
	public ResponseEntity<List<Resource>> getResourcesByGenre(@PathVariable String name) {
	
		List<Resource> resources = resourceService.findByGenreNameLikeIgnoreCase(name);
		
		if (resources != null) {
			return new ResponseEntity<>(resources, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/type/{name}", method = RequestMethod.GET)
	public ResponseEntity<List<Resource>> getResourcesByType(@PathVariable String name) {
	
		List<Resource> resources = resourceService.findByResourceTypeName(name);
		
		if (resources != null) {
			return new ResponseEntity<>(resources, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/author/{name}", method = RequestMethod.GET)
	public ResponseEntity<List<Resource>> getResourcesByAuthor(@PathVariable String name) {
	
		List<Resource> resources = resourceService.findByAuthor(name);
		
		if (resources != null) {
			return new ResponseEntity<>(resources, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Resource> deleteResource(@PathVariable Integer id) {

		Resource resourceSelected = resourceService.findOne(id);
		if (resourceSelected == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			List<Action> actions = actionService.findAll();
			for (Action action : actions) {
				if ((action.getDateLoanReturn() == null) && (action.getResource().getResource() == resourceSelected)) {
					return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
				}
			}
			resourceService.delete(resourceSelected);
			return new ResponseEntity<>(resourceSelected, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Resource> putResource(@PathVariable Integer id, @RequestBody Resource resourceUpdated) {

		Resource resource = resourceService.findOne(id);
		if ((resource != null) && (resource.getId() == resourceUpdated.getId())) {
			resourceService.save(resourceUpdated);
			return new ResponseEntity<>(resourceUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
