package appSpring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.repository.ResourceCopyRepository;

@Service
public class ResourceCopyService {

	@Autowired
	private ResourceCopyRepository repository;
}
