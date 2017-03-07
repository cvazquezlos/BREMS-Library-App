package appSpring.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.entity.Action;

public interface ActionRepository extends JpaRepository<Action, Integer> {

	Action findByDate(Date date);

}
