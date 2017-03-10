package appSpring.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import appSpring.entity.User;
import appSpring.repository.UserRepository;

@Controller
public class SearchController {
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping("/search")
	public String search(Model model, HttpServletRequest request){
		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged",true);
		}
		else model.addAttribute("unlogged",true);
		return "search";
	}
}
