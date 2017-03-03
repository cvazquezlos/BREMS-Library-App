package appSpring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {

	@RequestMapping("/admin/")
	public String home(Model model) {
		// model.addAttribute();
		return "admin/home";
	}

	@RequestMapping("/admin/users")
	public String users(Model model) {
		return "admin/user_management";
	}

	@RequestMapping("/admin/fines")
	public String fines(Model model) {
		return "admin/fines_management";
	}

	@RequestMapping("/admin/loans")
	public String loans(Model model) {
		return "admin/loans_management";
	}

	@RequestMapping("/admin/resources")
	public String resources(Model model) {
		return "admin/resource_management";
	}

}
