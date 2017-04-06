package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import appSpring.model.ResourceType;
import appSpring.repository.ResourceTypeRepository;

@Service
public class ResourceTypeService {

	@Autowired
	private ResourceTypeRepository repository;

	public ResourceType findOne(Integer id) {
		return repository.findOne(id);
	}

	public List<ResourceType> findAll() {
		return repository.findAll();
	}
	
	public Page<ResourceType> findAll(int page) {
		return repository.findAll(new PageRequest(page,3));
	}

	public ResourceType findByName(String name) {
		return repository.findByName(name);
	}

	public void save(ResourceType resourceType) {
		repository.save(resourceType);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

	public void delete(ResourceType resourceType) {
		repository.delete(resourceType);
	}

}
