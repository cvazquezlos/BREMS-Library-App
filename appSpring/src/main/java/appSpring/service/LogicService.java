package appSpring.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return (user.getAvaibleLoans()==0);
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
		resourceService.save(resource);
		user.setAvaibleLoans(user.getAvaibleLoans() - 1);
		userService.save(user);
		return 0;
	}

}
