package appSpring.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.model.Fine;
import appSpring.model.User;

public interface FineRepository extends JpaRepository<Fine, Integer> {

	List<Fine> findByInitDate(Date initDate);

	List<Fine> findByUser(User user);

}
