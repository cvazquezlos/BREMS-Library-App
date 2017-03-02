package appSpring.entity;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import appSpring.repository.UserRepository;

@Component
public class UserExamples {

	@Autowired
    private UserRepository userRepository;

    @PostConstruct
    private void initDatabase() {
    	
    	userRepository.save(new User("user", "pass", "0000", "Carlos", "Vázquez", "nosequemas", "sdadd@sas.com", "606000000", "Calle sdassdd", "ROLE_USER"));
    	userRepository.save(new User("admin", "pass", "0001", "Sergio", "Blay", "González", "ssad@sas.com", "606000000", "Calle sdassdd", "ROLE_ADMIN"));
    }
}
