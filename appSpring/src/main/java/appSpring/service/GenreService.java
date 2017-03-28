package appSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.model.Genre;
import appSpring.repository.GenreRepository;


@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;
	
	public Genre findOne(Integer id) {
		return repository.findOne(id);
	}
	
	public List<Genre> findAll() {
		return repository.findAll();
	}

	public void save(Genre genre) {
		repository.save(genre);
	}

	public void delete(Integer id) {
		repository.delete(id);
	}
}
