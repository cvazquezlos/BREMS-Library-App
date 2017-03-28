package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.model.Resource;
import appSpring.repository.ResourceRepository;

@Service
public class ResourceService {

	@Autowired
	private ResourceRepository repository;

	public Resource findOne(Integer id) {
		return repository.findOne(id);
	}

	public List<Resource> findAll() {
		return repository.findAll();
	}

	public Resource findByTitle(String title) {
		return repository.findByTitle(title);
	}

	public void save(Resource resource) {
		repository.save(resource);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

}
