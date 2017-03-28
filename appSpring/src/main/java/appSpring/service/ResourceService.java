package appSpring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.repository.ResourceRepository;

@Service
public class ResourceService {

	@Autowired
	private ResourceRepository repository;

}
