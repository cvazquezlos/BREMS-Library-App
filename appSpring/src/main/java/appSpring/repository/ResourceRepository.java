package appSpring.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.model.Genre;
import appSpring.model.Resource;
import appSpring.model.ResourceType;

public interface ResourceRepository extends JpaRepository<Resource, Integer> {

	Resource findByTitle(String title);
	
	Page<Resource> findAll (Pageable page);

	List<Resource> findByAuthor(String author);

	List<Resource> findByEditorial(String editorial);

	List<Resource> findByResourceType(ResourceType resourceType);
	
	List<Resource> findByResourceTypeName(String name);
	
	List<Resource> findByGenreNameLikeIgnoreCase(String name);
	
	Page<Resource> findByGenreNameLikeIgnoreCase(String name, Pageable page);
	
	List<Resource> findByGenreAndIdNot(Genre genre, Integer id);
	
	Page<Resource> findByResourceType(ResourceType resourceType, Pageable page);

	Page<Resource> findByTitleLikeIgnoreCase(String title, Pageable page);
	
	Page<Resource> findByTitleLikeIgnoreCaseOrGenreNameLikeIgnoreCaseOrAuthorLikeIgnoreCaseOrEditorialLikeIgnoreCase(String title, String genre_name, String author, String editorial, Pageable page);
	
	Resource findByTitleLikeIgnoreCase(String title);

	List<Resource> findByGenreNameLikeIgnoreCaseAndResourceType(String name, ResourceType resourceType);
	
	Page<Resource> findByGenreNameLikeIgnoreCaseAndResourceType(String name, ResourceType resourceType, Pageable page);

}
