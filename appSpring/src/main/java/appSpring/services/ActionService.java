package appSpring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSpring.repository.ActionRepository;

@Service
public class ActionService {

	@Autowired
	private ActionRepository repository;
}
