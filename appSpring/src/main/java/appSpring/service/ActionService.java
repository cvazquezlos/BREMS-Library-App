package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.model.Action;
import appSpring.model.User;
import appSpring.repository.ActionRepository;


@Service
public class ActionService {

	@Autowired
	private ActionRepository repository;
	
	public Action findOne(Integer id) {
		return repository.findOne(id);
	}
	
	public List<Action> findAll() {
		return repository.findAll();
	}

	public List<Action> findByUser(User user) {
		return repository.findByUser(user);
	}

	public void save(Action action) {
		repository.save(action);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

	public void delete(Action action) {
		repository.delete(action);
	}

}
