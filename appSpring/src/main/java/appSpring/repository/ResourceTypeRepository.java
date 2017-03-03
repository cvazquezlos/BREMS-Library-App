package appSpring.repository;

import java.util.List;
import appSpring.entity.ResourceType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceTypeRepository extends JpaRepository<ResourceType, Integer>{

	ResourceType findOneByName(String name);
}
