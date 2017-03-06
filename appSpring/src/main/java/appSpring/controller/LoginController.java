package appSpring.controller;


import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
	
	@RequestMapping("/login")
	public String login(Model model,HttpServletRequest request){

		if(request.isUserInRole("ADMIN")||request.isUserInRole("USER")) return "forward:/";
		model.addAttribute("unlogged",true);

		return "login";
	}
	
	@RequestMapping("/loginError")
	public String loginError(Model model){
		model.addAttribute("unlogged",true);
		model.addAttribute("loginError",true);
		return "login";
	}
}
