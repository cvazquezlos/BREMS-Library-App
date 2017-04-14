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

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.model.Fine;
import appSpring.model.ResourceCopy;
import appSpring.model.User;
import appSpring.service.UserService;

@RestController
@RequestMapping("/api/files")
public class FileRestController {

	public interface FineDetail extends Fine.Basic, Fine.ResoCopy, Fine.Usr, ResourceCopy.Basic, User.Basic {
	}
	
	@Autowired
	private UserService userService;

	@JsonView(FineDetail.class)
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<String> getFine(@PathVariable int id, Authentication authentication, HttpSession session,
			HttpServletRequest request) throws IOException {

		String data = userService.getImageData(id + ".jpg");
		if (data != null) {
			return new ResponseEntity<>(data, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
