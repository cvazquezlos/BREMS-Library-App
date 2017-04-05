package appSpring.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.model.Resource;
import appSpring.model.ResourceCopy;

public interface ResourceCopyRepository extends JpaRepository<ResourceCopy, Integer> {

	ResourceCopy findByLocationCode(String locationCode);
	
	Long countByResource(Resource resource);

	List<ResourceCopy> findByResource(Resource resource);
	
	Page<ResourceCopy> findAll(Pageable page);

}
