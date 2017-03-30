package appSpring.restController;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import appSpring.component.UserComponent;
import appSpring.model.Action;
import appSpring.model.Resource;
import appSpring.model.ResourceCopy;
import appSpring.model.User;
import appSpring.service.ActionService;
import appSpring.service.LogicService;
import appSpring.service.UserService;

@RestController
@RequestMapping("/api/loans")
public class ActionRestController {

	public interface LoanDetail extends Action.Basic, Action.ResoCopy, ResourceCopy.Basic, ResourceCopy.Reso, Resource.Basic, 
										Action.Usr, User.ActionInt {}

	private static final Logger log = LoggerFactory.getLogger(ActionRestController.class);

	@Autowired
	private ActionService actionService;
	@Autowired
	private UserService userService;
	@Autowired
	private LogicService logicService;

	@JsonView(LoanDetail.class)
	@RequestMapping(
			value = "/",
			method = RequestMethod.POST)
	public ResponseEntity<Action> postAction(@RequestBody Action loan, Authentication authentication, HttpSession session) {
		session.setMaxInactiveInterval(-1);
		User loggedUser = userService.findByName(authentication.getName());
		System.out.println(loggedUser.getName());
		if (loggedUser == loan.getUser()) {
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
	public ResponseEntity<List<Action>> getAllAction(Authentication authentication, HttpSession session) {
		session.setMaxInactiveInterval(-1);
		List<Action> loans = actionService.findByUser(userService.findByName(authentication.getName()));
		if (loans != null) {
			return new ResponseEntity<>(loans, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(LoanDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Action> getAction(@PathVariable int id, Authentication authentication, HttpSession session) {
		session.setMaxInactiveInterval(-1);
		Action loan = actionService.findOne(id);
		if (loan != null) {
			if (authentication.getName().contains(loan.getUser().getName())) {
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
	@RequestMapping(
			value = "/{id}",
			params = {"request", "return"},
			method = RequestMethod.PUT)
	public ResponseEntity<Action> putAction(@PathVariable Integer id, @RequestBody Action loanUpdated,
			@PathVariable("request") boolean request, @PathVariable("return") boolean returnn,
			org.springframework.web.context.request.WebRequest webRequest) {

		boolean requestDate = !webRequest.getParameter("request").contains("s");
		boolean returnDate = !webRequest.getParameter("returnn").contains("s");
		Action loan = actionService.findOne(id);
		if ((loan != null) && (loan.getID() == loanUpdated.getID())) {
			Date date = new Date();
			if ((!requestDate) && (!returnDate)) {
			} else if ((requestDate) && (!returnDate)){
				loan.setDateLoanGiven(date);
			} else if ((!requestDate) && (returnDate)) {
				loan.setDateLoanReturn(date);
			} else {
				loan.setDateLoanGiven(date);
				loan.setDateLoanReturn(date);
			}
			actionService.save(loanUpdated);
			return new ResponseEntity<>(loan, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
