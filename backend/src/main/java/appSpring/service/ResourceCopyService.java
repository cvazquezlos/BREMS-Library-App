package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import appSpring.model.Resource;
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
	
	public Page<ResourceCopy> findAll(int page){
		return repository.findAll(new PageRequest(page,3));
	}

	public Long countByResource(Resource resource) {
		return repository.countByResource(resource);
	}

	public void save(ResourceCopy res_copy) {
		repository.save(res_copy);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

	public void delete(ResourceCopy copy) {
		repository.delete(copy);
	}

}
