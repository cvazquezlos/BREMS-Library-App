package appSpring.repository;

import java.util.List;
import entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Integer> {

	List<Resource> findByTitle(String title);

	List<Resource> findByAuthor(String author);

	List<Resource> findByEditorial(String editorial);
	// Implementar los métodos para encontrar por género y tipo de recurso

}
