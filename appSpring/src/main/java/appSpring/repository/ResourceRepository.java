package appSpring.repository;

import java.util.List;

import appSpring.entity.Resource;
import appSpring.entity.ResourceType;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Integer> {

	List<Resource> findByTitle(String title);

	List<Resource> findByAuthor(String author);

	List<Resource> findByEditorial(String editorial);

	//List<Resource> findByGenre(Genre genre);

	List<Resource> findByResourceType(ResourceType resourceType);

}
