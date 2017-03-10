package appSpring.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import appSpring.entity.Resource;
import appSpring.entity.User;
import appSpring.repository.ResourceRepository;
import appSpring.repository.UserRepository;

@Controller
public class SearchController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ResourceRepository resourceRepository;
	
	@RequestMapping(method = RequestMethod.GET, value = "/search")
	public String search(Model model, HttpServletRequest request, @RequestParam String mySearch){
		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged",true);
		}
		else model.addAttribute("unlogged",true);
		
		Page<Resource> search = resourceRepository.findByTitleLikeIgnoreCaseOrAuthorLikeIgnoreCaseOrEditorialLikeIgnoreCase("%"+mySearch+"%","%"+mySearch+"%","%"+mySearch+"%",new PageRequest(0,10));
		model.addAttribute("search", search);
		return "search";
	}
}
