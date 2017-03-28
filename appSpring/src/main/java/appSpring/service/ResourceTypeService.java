package appSpring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.repository.ResourceTypeRepository;

@Service
public class ResourceTypeService {

	@Autowired
	private ResourceTypeRepository repository;
}
