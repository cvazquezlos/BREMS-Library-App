package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import appSpring.model.Genre;
import appSpring.model.Resource;
import appSpring.model.ResourceType;
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

	public Page<Resource> findAll(Pageable page) {
		return repository.findAll(page);
	}

	public Resource findByTitle(String title) {
		return repository.findByTitle(title);
	}

	public Resource findByTitleLikeIgnoreCase(String title) {
		return repository.findByTitleLikeIgnoreCase(title);
	}

	public Page<Resource> findByResourceType(ResourceType resourceType, Pageable page) {
		return repository.findByResourceType(resourceType, page);
	}

	public List<Resource> findByGenreAndIdNot(Genre genre, Integer id) {
		return repository.findByGenreAndIdNot(genre, id);
	}

	public void save(Resource resource) {
		repository.save(resource);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}

	public void delete(Resource resource) {
		repository.delete(resource);
	}

}
