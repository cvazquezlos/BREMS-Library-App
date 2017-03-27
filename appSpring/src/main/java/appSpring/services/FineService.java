package appSpring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.repository.FineRepository;

@Service
public class FineService {

	@Autowired
	private FineRepository repository;
}
