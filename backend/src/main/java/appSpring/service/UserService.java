package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

	public Page<User> findAll(int page) {
		return repository.findAll(new PageRequest(page,3));
	}

	public User findByName(String name) {
		return repository.findByName(name);
	}

	public User findByEmail(String email) {
		return repository.findByEmail(email);
	}

	public void save(User user) {
		repository.save(user);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

	public void delete(User user) {
		repository.delete(user);
	}

}
