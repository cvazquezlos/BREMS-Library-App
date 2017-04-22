package appSpring.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import appSpring.model.Action;
import appSpring.model.Fine;
import appSpring.model.Resource;
import appSpring.model.ResourceCopy;
import appSpring.model.User;

@Service
public class LogicService {

	@Autowired
	private ActionService actionService;
	@Autowired
	private UserService userService;
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private ResourceCopyService resourceCopyService;
	@Autowired
	private FineService fineService;

	public Action action;

	private boolean hasActiveFines(User user, Date date) {
		List<Fine> fines = user.getFines();
		for (Fine fine : fines) {
			if (date.before(fine.getFinishDate())) {
				return true;
			}
		}
		return false;
	}

	private boolean isBanned(User user) {
		return user.getisBanned();
	}

	private boolean hasEnoughAvaibleActions(User user) {
		return (user.getAvaibleLoans() == 0);
	}

	private boolean hasEnoughCopies(Resource resource) {
		return (resource.getNoReservedCopies().isEmpty());
	}

	private boolean hasAnActiveAction(User user, Resource resource) {
		List<Action> actions = user.getActions();
		for (Action action : actions) {
			if (action.getResource().getResource() == resource && action.getDateLoanReturn() == null) {
				return true;
			}
		}
		return false;
	}

	public int reserveAResource(User user, Date date, Resource resource, ResourceCopy resourceCopy) {
		if (user == null)
			return 1;
		if (resource == null)
			return 2;
		if (hasActiveFines(user, date))
			return 3;
		if (isBanned(user))
			return 4;
		if (hasEnoughAvaibleActions(user))
			return 5;
		if (hasEnoughCopies(resource))
			return 6;
		if (hasAnActiveAction(user, resource))
			return 7;
		if ((resourceCopy != null) && !(resource.getNoReservedCopies().contains(resourceCopy.getLocationCode())))
			return 8;
		Action reserve = new Action(date);
		reserve.setUser(user);
		if (resourceCopy != null) {
			resource.getNoReservedCopies().remove(resourceCopy.getLocationCode());
			reserve.setResource(resourceCopy);
		} else {
			ArrayList<String> avaibleCopies = resource.getNoReservedCopies();
			reserve.setResource(resourceCopyService.findByLocationCode(avaibleCopies.get(0)));
			avaibleCopies.remove(0);
			resource.setNoReservedCopies(avaibleCopies);
		}
		if (resource.getNoReservedCopies().isEmpty())
			resource.setAvaibleReserve(false);
		actionService.save(reserve);
		this.action = reserve;
		resourceService.save(resource);
		user.setAvaibleLoans(user.getAvaibleLoans() - 1);
		userService.save(user);
		return 0;
	}

	public Action getAction() {
		return this.action;
	}

	private boolean deleteLoanAvaible(Action loan) {
		return (loan.getDateLoanReturn() == null);
	}

	public int deleteALoan(Action loan) {
		if (deleteLoanAvaible(loan)) {
			return 1;
		}
		actionService.delete(loan);
		return 0;
	}

	private boolean existsSameNick(String name) {
		return (userService.findByName(name) != null);
	}

	private boolean existsSameEmail(String email) {
		return (userService.findByEmail(email) != null);
	}

	private boolean hasNotPassword(String password) {
		return (password == null);
	}

	public int createAnUser(User user) {
		if (existsSameNick(user.getName()))
			return 1;
		if (existsSameEmail(user.getEmail()))
			return 2;
		if (hasNotPassword(user.getPasswordHash()))
			return 3;
		user.setAvaibleLoans(3);
		user.setActions(new ArrayList<Action>());
		user.setPasswordHash(new BCryptPasswordEncoder().encode(user.getPasswordHash()));
		userService.save(user);
		return 0;
	}

	private boolean itIsPossibleToReturn(Action action) {
		return ((action.getDateLoanGiven() != null) && (action.getDateLoanReturn() == null));
	}

	private boolean itIsPossibleToGive(Action action) {
		return ((action.getDateLoanGiven() == null) && (action.getDateLoanReturn() == null));
	}

	public int addGiveDate(Action action, Date date) {
		if (!itIsPossibleToGive(action))
			return 1;
		action.setDateLoanGiven(date);
		actionService.save(action);
		return 0;
	}

	@SuppressWarnings("deprecation")
	public int addReturnDate(Action action, Date date) {
		if (!itIsPossibleToReturn(action))
			return 1;
		User userFound = action.getUser();
		action.setDateLoanReturn(date);
		ResourceCopy copyNowAvaible = action.getResource();
		Resource resourceFound = copyNowAvaible.getResource();
		ArrayList<String> avaibleCopies = resourceFound.getNoReservedCopies();
		avaibleCopies.add(copyNowAvaible.getLocationCode());
		resourceFound.setNoReservedCopies(avaibleCopies);
		resourceFound.setAvaibleReserve(true);
		resourceService.save(resourceFound);
		userFound.setAvaibleLoans(userFound.getAvaibleLoans() + 1);
		userFound.setBanned(false);
		Date resourceHaveToBeReturnedDate = action.getDateLoanGiven();
		resourceHaveToBeReturnedDate.setMinutes(resourceHaveToBeReturnedDate.getMinutes() + 1);
		if (resourceHaveToBeReturnedDate.before(date)) {
			Date banDate = new Date();
			banDate.setMinutes(banDate.getMinutes() + 3);
			Fine userFine = new Fine(date, banDate, userFound, copyNowAvaible);
			fineService.save(userFine);
		}
		List<Action> currentActions = actionService.findByUser(action.getUser());
		for (Action currentAction : currentActions) {
			Date date1 = currentAction.getDateLoanGiven();
			if (date1 == null)
				continue;
			Date date3 = currentAction.getDateLoanReturn();
			if (date3 != null)
				continue;
			date1.setMinutes(date1.getMinutes() + 1);
			Date date2 = new Date();
			if (date1.before(date2)) {
				userFound.setBanned(true);
			}
		}
		actionService.save(action);
		userService.save(userFound);
		return 0;
	}

}
