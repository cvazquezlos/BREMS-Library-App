package appSpring.repository;

import org.springframework.data.repository.CrudRepository;
import appSpring.entity.User;

public interface UserRepository extends CrudRepository<User, Integer>{
	
	User findByName(String name);

}
