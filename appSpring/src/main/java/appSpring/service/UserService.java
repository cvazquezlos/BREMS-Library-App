package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.model.User;
import appSpring.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public User findOne(Integer id) {
		return repository.findOne(id);
	}

	public List<User> findAll() {
		return repository.findAll();
	}

	public void save(User user) {
		repository.save(user);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

}
