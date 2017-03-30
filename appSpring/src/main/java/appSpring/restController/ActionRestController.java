package appSpring.restController;

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

import appSpring.component.UserComponent;
import appSpring.model.Action;
import appSpring.model.Resource;
import appSpring.model.ResourceCopy;
import appSpring.model.User;
import appSpring.service.ActionService;
import appSpring.service.LogicService;

@RestController
@RequestMapping("/api/loans")
public class ActionRestController {

	public interface LoanDetail extends Action.Basic, Action.ResoCopy, ResourceCopy.Basic, ResourceCopy.Reso, Resource.Basic, 
										Action.Usr, User.ActionInt {}

	@Autowired
	private ActionService actionService;
	@Autowired
	private LogicService logicService;
	@Autowired
	private UserComponent userComponent;

	@JsonView(LoanDetail.class)
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ResponseEntity<Action> postAction(@RequestBody Action loan) {

		if (userComponent.getLoggedUser() == loan.getUser()) {
			int status = logicService.reserveAResource(loan.getUser(), loan.getDateLoanInit(), loan.getResource().getResource(), loan.getResource());
			if (status == 0) {
				return new ResponseEntity<>(loan, HttpStatus.CREATED);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value="/all", method = RequestMethod.GET)
	public ResponseEntity<List<Action>> getAllAction() {

		List<Action> loans = actionService.findByUser(userComponent.getLoggedUser());
		if (loans != null) {
			return new ResponseEntity<>(loans, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Action> getAction(@PathVariable int id) {

		Action loan = actionService.findOne(id);
		if (loan != null) {
			if (userComponent.getLoggedUser() == loan.getUser()) {
				return new ResponseEntity<>(loan, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Action> deleteAction(@PathVariable Integer id) {

		Action loan = actionService.findOne(id);
		if (loan != null) {
			int status = logicService.deleteALoan(loan);
			if (status == 0) {
				return new ResponseEntity<>(loan, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Action> putAction(@PathVariable Integer id, @RequestBody Action loanUpdated) {

		Action loan = actionService.findOne(id);
		if ((loan != null) && (loan.getID() == loanUpdated.getID())) {
			actionService.save(loanUpdated);
			return new ResponseEntity<>(loan, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
