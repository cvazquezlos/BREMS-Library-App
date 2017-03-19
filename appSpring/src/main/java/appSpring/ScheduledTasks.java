package appSpring;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import appSpring.entity.Action;
import appSpring.entity.User;
import appSpring.repository.ActionRepository;
import appSpring.repository.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class ScheduledTasks {
	
	@Autowired
	private ActionRepository actionRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("d MMM yyyy HH:mm:ss");

    @Scheduled(fixedRate = 30000	/* TIME BEETWEEN EXECUTIONS */)
    public void loanRevisor() {
        log.info("Loan revisor task iniciated {}", dateFormat.format(new Date()));
        
        List<User> allUsers = userRepository.findAll();
        for(int i=0; i<allUsers.size()+1; i++){        	
        	List<Action> currentActions = actionRepository.findByUserId(i);
        	
        	for(int j=0; j<currentActions.size(); j++){
        		Action currentAction = currentActions.get(j);
        		Date date1 = currentAction.getDateLoanGiven();
        		if(date1==null) continue;
        		date1.setMinutes(date1.getMinutes()+1);
        		Date date2 = new Date();
        		if(date1.before(date2)){
        			User currentUser = userRepository.findById(i);
        			currentUser.setBanned(true);
        			userRepository.save(currentUser);
        		}
        	}
        }
    }
}
