package appSpring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

	@RequestMapping("/user_profile")
	public String user(Model model){
		//model.addAttribute();
		return "userProfile";
	}
}