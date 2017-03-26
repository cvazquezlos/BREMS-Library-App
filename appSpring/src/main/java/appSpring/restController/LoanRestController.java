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

import appSpring.entity.Action;
import appSpring.entity.Resource;
import appSpring.entity.ResourceCopy;
import appSpring.entity.User;
import appSpring.repository.ActionRepository;

@RestController
@RequestMapping("/api/loan")
public class LoanRestController {
	
	public interface LoanDetail extends Action.Basic, User.UserLoan, ResourceCopy.Basic, Resource.Basic {}
	
	@Autowired
	private ActionRepository actionRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Action postAction(@RequestBody Action loan) {

		actionRepository.save(loan);

		return loan;
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
