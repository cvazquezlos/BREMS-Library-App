package appSpring.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.entity.Action;
import appSpring.entity.User;

public interface ActionRepository extends JpaRepository<Action, Integer> {

	Action findByDateLoanInit(Date dateLoanInit);
	
	List <Action> findByUserId (Integer id);
	
	List <Action> findByUser (User user);

}
