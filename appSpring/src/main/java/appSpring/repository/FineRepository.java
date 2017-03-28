package appSpring.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.model.Fine;

public interface FineRepository extends JpaRepository<Fine, Integer> {

	List<Fine> findByInitDate(Date initDate);

}
