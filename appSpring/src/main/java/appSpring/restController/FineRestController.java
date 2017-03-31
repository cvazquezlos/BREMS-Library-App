package appSpring.restController;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.model.Fine;
import appSpring.service.FineService;
import appSpring.service.UserService;

@RestController
@RequestMapping("/api/fines")
public class FineRestController {

	public interface FineDetail extends Fine.Basic, Fine.ResoCopy, Fine.Usr {
	}

	@Autowired
	private FineService fineService;
	@Autowired
	private UserService userService;

	@JsonView(FineDetail.class)
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Fine>> getAllFine(Authentication authentication, HttpSession session,
			HttpServletRequest request) {

		session.setMaxInactiveInterval(-1);
		if (request.isUserInRole("ADMIN")) {
			List<Fine> fines = fineService.findAll();
			return new ResponseEntity<>(fines, HttpStatus.OK);
		} else {
			List<Fine> fines = fineService.findByUser(userService.findByName(authentication.getName()));
			if (fines != null) {
				return new ResponseEntity<>(fines, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
	}

	@JsonView(FineDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Fine> getFine(@PathVariable int id, Authentication authentication, HttpSession session,
			HttpServletRequest request) {

		session.setMaxInactiveInterval(-1);
		Fine fine = fineService.findOne(id);
		if (fine != null) {
			if ((authentication.getName().contains(fine.getUser().getName())) || (request.isUserInRole("ADMIN")))
				return new ResponseEntity<>(fine, HttpStatus.OK);
			else
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Fine> deleteFine(@PathVariable Integer id) {

		Fine fine = fineService.findOne(id);
		if (fine != null) {
			fineService.delete(fine);
			return new ResponseEntity<>(fine, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Fine> putFine(@PathVariable Integer id, @RequestBody Fine fineUpdated) {

		Fine fine = fineService.findOne(id);
		if ((fine != null) && (fine.getId() == fineUpdated.getId())) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
