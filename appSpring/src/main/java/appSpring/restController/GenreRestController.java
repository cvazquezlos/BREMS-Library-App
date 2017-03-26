package appSpring.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import appSpring.entity.Genre;
import appSpring.entity.Resource;
import appSpring.repository.GenreRepository;
import appSpring.restController.ResourceRestController.ResourceDetail;

@RestController
@RequestMapping("/api/genres")
public class GenreRestController {

	public interface GenreDetail extends Genre.Basic, Genre.Reso, Resource.Basic {}

	@Autowired
	private GenreRepository genreRepository;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Genre postGenre(@RequestBody Genre genre) {

		genreRepository.save(genre);

		return genre;
	}

	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<List<Genre>> getAllGenres() {

		List<Genre> genres = genreRepository.findAll();
		if (genres != null) {
			return new ResponseEntity<>(genres, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@JsonView(ResourceDetail.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Genre> getGenre(@PathVariable int id) {

		Genre genre = genreRepository.findOne(id);
		if (genre != null) {
			return new ResponseEntity<>(genre, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Genre> deleteGenre(@PathVariable Integer id) {

		Genre genreSelected = genreRepository.findOne(id);
		if (genreSelected == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			genreRepository.delete(genreSelected);
			return new ResponseEntity<>(genreSelected, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Genre> putGenre(@PathVariable Integer id, @RequestBody Genre genreUpdated) {

		Genre genre = genreRepository.findOne(id);
		if ((genre != null) && (genre.getId() == genreUpdated.getId())) {
			genreRepository.save(genreUpdated);
			return new ResponseEntity<>(genreUpdated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
