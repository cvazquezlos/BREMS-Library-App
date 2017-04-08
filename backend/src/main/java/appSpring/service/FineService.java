package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import appSpring.model.Fine;
import appSpring.model.User;
import appSpring.repository.FineRepository;


@Service
public class FineService {

	@Autowired
	private FineRepository repository;
	
	public Fine findOne(Integer id) {
		return repository.findOne(id);
	}
	
	public List<Fine> findAll() {
		return repository.findAll();
	}
	
	public Page<Fine> findAll(int page){
		return repository.findAll(new PageRequest(page,3));
	}

	public List<Fine> findByUser(User user) {
		return repository.findByUser(user);
	}
	
	public Page<Fine> findByUser(User user, int page){
		return repository.findByUser(user,new PageRequest(page,3));
	}

	public void save(Fine fine) {
		repository.save(fine);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

	public void delete(Fine fine) {
		repository.delete(fine);
	}

}
