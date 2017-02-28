package appSpring.repository;

import org.springframework.data.repository.CrudRepository;
import entity.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	User findByName(String name);
}
