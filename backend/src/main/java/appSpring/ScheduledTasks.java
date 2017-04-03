package appSpring;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import appSpring.model.Action;
import appSpring.model.User;
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

	@Autowired
	private SmtpMailSender smtpMailSender;

	private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);
	private static final SimpleDateFormat dateFormat = new SimpleDateFormat("d MMM yyyy HH:mm:ss");

	@SuppressWarnings("deprecation")
	@Scheduled(fixedRate = 30000 /* TIME BEETWEEN EXECUTIONS */)
	public void loanRevisor() throws MessagingException {
		log.info("Loan revisor task iniciated {}", dateFormat.format(new Date()));

		List<User> allUsers = userRepository.findAll();
		for (int i = 0; i < allUsers.size() + 1; i++) {
			List<Action> currentActions = actionRepository.findByUserId(i);

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
					User currentUser = userRepository.findById(i);
					if (!currentUser.getisBanned()) {
						currentUser.setBanned(true);
						userRepository.save(currentUser);
						smtpMailSender.send(currentUser.getEmail(), "Has recibido una multa", "Hola, "
								+ currentUser.getFirstName()
								+ ".<br>Actualmente has recibido una penalización debido a que no has devuelto el recurso "
								+ currentAction.getResource().getResource().getTitle()
								+ " a tiempo.<br>Devuelve el recurso cuanto antes, ya que la penalización da comienzo cuando devuelves el recurso.<br>Un saludo.");
					}
				}
			}
		}
	}

}
