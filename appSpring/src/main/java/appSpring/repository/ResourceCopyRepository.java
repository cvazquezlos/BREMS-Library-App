package appSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import appSpring.entity.ResourceCopy;

public interface ResourceCopyRepository extends JpaRepository<ResourceCopy, Integer> {

	ResourceCopy findByLocationCode(String locationCode);

}
