package appSpring.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.entity.Action;

public interface ActionRepository extends JpaRepository<Action, Integer> {

	Action findByDateLoanInit(Date dateLoanInit);

}
