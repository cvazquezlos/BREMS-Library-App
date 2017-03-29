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
import appSpring.model.Fine;
import appSpring.model.Resource;
import appSpring.model.ResourceCopy;
import appSpring.repository.ActionRepository;
import appSpring.repository.ResourceCopyRepository;
import appSpring.repository.ResourceRepository;

@RestController
@RequestMapping("/api/resourcecopies")
public class ResourceCopyRestController {

	public interface ResourceCopyDetail extends ResourceCopy.Basic, ResourceCopy.Fin, ResourceCopy.Reso, Fine.Basic, Resource.Basic {}

	@Autowired
	private ResourceCopyRepository resourceCopyRepository;
	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private ActionRepository actionRepository;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public ResourceCopy postResourceCopy(@RequestBody ResourceCopy resourceCopy) {

		Resource resource = resourceCopy.getResource();
		resourceCopyRepository.save(resourceCopy);
		resource.getNoReservedCopies().add(resourceCopy.getLocationCode());
		resource.getResourceCopies().add(resourceCopy);
		resourceRepository.save(resource);

		return resourceCopy;
	}

	@JsonView(ResourceCopyDetail.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<List<ResourceCopy>> getResourceCopies() {

		List<ResourceCopy> resourceCopies = resourceCopyRepository.findAll();
		if (resourceCopies != null) {
			return new ResponseEntity<>(resourceCopies, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(ResourceCopyDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<ResourceCopy> getResourceCopy(@PathVariable Integer id) {

		ResourceCopy resourceCopy = resourceCopyRepository.findOne(id);
		if (resourceCopy != null) {
			return new ResponseEntity<>(resourceCopy, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<ResourceCopy> deleteResourceCopy(@PathVariable Integer id) {

		ResourceCopy resourceCopySelected = resourceCopyRepository.findOne(id);
		if (resourceCopySelected == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			List<Action> actions = actionRepository.findAll();
			for (Action action : actions) {
				if ((action.getResource() == resourceCopySelected) && (action.getDateLoanReturn() == null)) {
					return new ResponseEntity<>(HttpStatus.CONFLICT);
				}
			}
			Resource resource = resourceCopySelected.getResource();
			resource.getResourceCopies().remove(resourceCopySelected);
			resource.getNoReservedCopies().remove(resourceCopySelected.getLocationCode());
			resourceCopyRepository.delete(resourceCopySelected);
			resourceRepository.save(resource);
			return new ResponseEntity<>(resourceCopySelected, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<ResourceCopy> putResourceCopy(@PathVariable Integer id, @RequestBody ResourceCopy resourceCopyUpdated) {

		ResourceCopy resourceCopy = resourceCopyRepository.findOne(id);
		if ((resourceCopy != null) && (resourceCopy.getID() == resourceCopyUpdated.getID())) {
			resourceCopyRepository.save(resourceCopyUpdated);
			return new ResponseEntity<>(resourceCopyUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
