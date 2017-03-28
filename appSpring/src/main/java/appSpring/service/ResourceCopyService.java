package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.model.ResourceCopy;
import appSpring.repository.ResourceCopyRepository;


@Service
public class ResourceCopyService {

	@Autowired
	private ResourceCopyRepository repository;
	
	public ResourceCopy findOne(Integer id) {
		return repository.findOne(id);
	}
	
	public ResourceCopy findByLocationCode(String locationCode) {
		return repository.findByLocationCode(locationCode);
	}
	
	public List<ResourceCopy> findAll() {
		return repository.findAll();
	}

	public void save(ResourceCopy res_copy) {
		repository.save(res_copy);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}
}
