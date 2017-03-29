package appSpring.restController;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.model.Action;
import appSpring.model.Fine;
import appSpring.model.Resource;
import appSpring.model.ResourceCopy;
import appSpring.model.User;
import appSpring.repository.ActionRepository;
import appSpring.service.ResourceService;
import appSpring.service.UserService;

@RestController
@RequestMapping("/api/actions")
public class ActionRestController {

	public interface LoanDetail extends Action.Basic, Action.ResoCopy, ResourceCopy.Basic, ResourceCopy.Reso, Resource.Basic, 
										Action.Usr, User.ActionInt {}

	@Autowired
	private ActionRepository actionRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private ResourceService resourceService;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ResponseEntity<Action> postAction(@RequestBody Action loan) {

		Calendar today = Calendar.getInstance();
		today.set(Calendar.HOUR_OF_DAY, 0);
		User user = loan.getUser();
		List<Fine> fines = user.getFines();
		for (Fine fine : fines) {
			Date currentDate = new Date();
			if (currentDate.before(fine.getFinishDate()) || (user.getisBanned()) || (user.getAvaibleLoans() == 0)) {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
		}
		if (loan.getResource().getResource().getNoReservedCopies().contains(loan.getResource().getLocationCode())) {
			Resource resource = loan.getResource().getResource();
			resource.getNoReservedCopies().remove(loan.getResource().getLocationCode());
			user.setAvaibleLoans(user.getAvaibleLoans()-1);
			if (resource.getNoReservedCopies().isEmpty()) {
				resource.setAvaibleReserve(!resource.getAvaibleReserve());
			}
			userService.save(user);
			resourceService.save(resource);
			actionRepository.save(loan);
			return new ResponseEntity<>(loan, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value="/all", method = RequestMethod.GET)
	public ResponseEntity<List<Action>> getAllAction() {

		List<Action> loans = actionRepository.findAll();

		if (loans != null) {
			return new ResponseEntity<>(loans, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Action> getAction(@PathVariable int id) {

		Action loan = actionRepository.findOne(id);
		if (loan != null) {
			return new ResponseEntity<>(loan, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Action> deleteAction(@PathVariable Integer id) {

		Action loan = actionRepository.findOne(id);
		if (loan != null) {
			if (loan.getDateLoanReturn() == null) {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
			actionRepository.delete(loan);
			return new ResponseEntity<>(loan, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Action> putAction(@PathVariable Integer id, @RequestBody Action loanUpdated) {

		Action loan = actionRepository.findOne(id);
		if ((loan != null) && (loan.getID() == loanUpdated.getID())) {
			actionRepository.save(loanUpdated);
			return new ResponseEntity<>(loan, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
