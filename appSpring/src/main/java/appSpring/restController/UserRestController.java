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
import appSpring.model.User;
import appSpring.repository.ActionRepository;
import appSpring.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserRestController {

	public interface UserDetail extends User.Basic, User.Act, User.Penalty, Fine.Basic, Action.Basic {}

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ActionRepository actionRepository;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User postUser(@RequestBody User user) {

		userRepository.save(user);

		return user;
	}

	@JsonView(UserDetail.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getUsers() {

		List<User> users = userRepository.findAll();
		if (users != null) {
			return new ResponseEntity<>(users, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(UserDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@PathVariable int id) {

		User user = userRepository.findOne(id);
		if (user != null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable Integer id) {

		User userSelected = userRepository.findOne(id);
		if (userSelected != null) {
			List<Action> actions = actionRepository.findAll();
			for (Action action : actions) {
				if ((action.getDateLoanReturn() == null) && (action.getUser() == userSelected)) {
					return new ResponseEntity<>(HttpStatus.CONFLICT);
				}
			}
			userRepository.delete(userSelected);
			return new ResponseEntity<>(userSelected, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> putUser(@PathVariable Integer id, @RequestBody User userUpdated) {

		User user = userRepository.findOne(id);
		if ((user != null) && (user.getId() == userUpdated.getId())) {
			userRepository.save(userUpdated);
			return new ResponseEntity<>(userUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
