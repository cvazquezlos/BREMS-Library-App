package appSpring.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import appSpring.entity.Resource;
import appSpring.repository.ResourceRepository;

@RestController
public class ResourceRestController {
	
	@Autowired
	private ResourceRepository resourceRepository;

	@RequestMapping(value="/resource/{id}", method=RequestMethod.GET)
	public ResponseEntity<Resource> getResources(@PathVariable int id){
		
		Resource resource = resourceRepository.findOne(id);
		
		if (resource != null) {
			return new ResponseEntity<>(resource, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
}
