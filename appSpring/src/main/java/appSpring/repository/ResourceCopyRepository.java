package appSpring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.entity.Resource;
import appSpring.entity.ResourceCopy;

public interface ResourceCopyRepository extends JpaRepository<ResourceCopy, Integer> {

	ResourceCopy findByLocationCode(String locationCode);
	
	Long countByResource(Resource resource);

	List<ResourceCopy> findByResource(Resource resource);

}
