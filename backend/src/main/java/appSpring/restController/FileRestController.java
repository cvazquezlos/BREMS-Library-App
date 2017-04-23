package appSpring.restController;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import appSpring.service.UserService;
import appSpring.service.ResourceService;

@RestController
@RequestMapping("/api/files")
public class FileRestController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private ResourceService resourceService;

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<String> getUserfile(@PathVariable int id, Authentication authentication, HttpSession session,
			HttpServletRequest request) throws IOException {

		String data = userService.getImageData(id + ".jpg");
		if (data != null) {
			return new ResponseEntity<>(data, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/resource/{id}", method = RequestMethod.GET)
	public ResponseEntity<String> getResourceFile(@PathVariable int id, Authentication authentication, HttpSession session,
			HttpServletRequest request) throws IOException {

		String data = resourceService.getImageData(id + ".jpg");
		if (data != null) {
			return new ResponseEntity<>(data, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
