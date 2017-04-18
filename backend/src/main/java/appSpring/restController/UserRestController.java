package appSpring.restController;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.model.Action;
import appSpring.model.ImagesPath;
import appSpring.model.Fine;
import appSpring.model.User;
import appSpring.service.ActionService;
import appSpring.service.LogicService;
import appSpring.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserRestController {

	public interface UserDetail extends User.Basic, User.Act, User.Fin, Fine.Basic, Action.Basic {}
	public interface UserBasic extends User.LoginInt {}

	@Autowired
	private UserService userService;
	@Autowired
	private ActionService actionService;
	@Autowired
	private LogicService logicService;

	@CrossOrigin(origins = "http://localhost:4200")
	@JsonView(UserDetail.class)
	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<User> postUser(@RequestBody User user) {

		int status = logicService.createAnUser(user);
		if (status == 0) {
			return new ResponseEntity<>(user, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@JsonView(UserDetail.class)
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<Page<User>> getUsers(HttpSession session, @RequestParam (required=false) Integer page) {

		session.setMaxInactiveInterval(-1);
		if(page==null) page=0;
		Page<User> users = userService.findAll(page);
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	@JsonView(UserDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@PathVariable int id, Authentication authentication, HttpSession session,
			HttpServletRequest request) {

		session.setMaxInactiveInterval(-1);
		User user = userService.findOne(id);
		if (user != null) {
			if ((authentication.getName().equals(user.getName())) || (request.isUserInRole("ADMIN")))
				return new ResponseEntity<>(user, HttpStatus.OK);
			else
				return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@JsonView(UserBasic.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable Integer id, HttpSession session,
			Authentication authentication) {

		session.setMaxInactiveInterval(-1);
		User userSelected = userService.findOne(id);
		if (userSelected != null) {
			if (authentication.getName().equals(userSelected.getName())) {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
			List<Action> actions = actionService.findAll();
			for (Action action : actions) {
				if ((action.getDateLoanReturn() == null) && (action.getUser() == userSelected)) {
					return new ResponseEntity<>(HttpStatus.CONFLICT);
				}
			}
			userService.delete(userSelected);
			return new ResponseEntity<>(userSelected, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@JsonView(UserDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> putUser(@PathVariable Integer id, @RequestBody User userUpdated,
			HttpSession session, HttpServletRequest request, Authentication authentication) {

		session.setMaxInactiveInterval(-1);
		User user = userService.findOne(id);
		
		if ((user != null) && (user.getId() == userUpdated.getId())) 
		{
			if ((authentication.getName().equals(user.getName())) || (request.isUserInRole("ADMIN"))) 
			{
				user.setEmail(userUpdated.getEmail());
				user.setFirstName(userUpdated.getFirstName());
				user.setLastName1(userUpdated.getLastName1());
				user.setLastName2(userUpdated.getLastName2());
				user.setTelephone(userUpdated.getTelephone());
				user.setBiography(userUpdated.getBiography());
				user.setAddress(userUpdated.getAddress());
				user.setDni(userUpdated.getDni());
				user.setTelephone(userUpdated.getTelephone());
				user.setViewTelephone(userUpdated.isViewTelephone());
				userService.save(user);
				return new ResponseEntity<>(user, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@JsonView(UserDetail.class)
	@RequestMapping(value = "/{id}/upload", method = RequestMethod.PUT)
	public ResponseEntity<User> putUserImage(@PathVariable Integer id, 
			@RequestParam("file") MultipartFile file, HttpSession session, 
			HttpServletRequest request, Authentication authentication) throws IOException {

		session.setMaxInactiveInterval(-1);
		User user = userService.findOne(id);
		if (user != null) {
			if ((authentication.getName().equals(user.getName())) || (request.isUserInRole("ADMIN"))) {
				String filename = userService.handleUploadImagetoDatabase(file, user.getId(), 
						ImagesPath.IMAGES_USER.toString());
				user.setAvatar(filename);
				user.setHasPhoto(true);
				System.out.println("TODO OK");
				userService.save(user);
				return new ResponseEntity<>(user, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.FORBIDDEN);
			}
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
