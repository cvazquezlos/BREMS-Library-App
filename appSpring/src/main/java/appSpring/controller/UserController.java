package appSpring.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import appSpring.model.Action;
import appSpring.model.User;
import appSpring.repository.UserRepository;

@Controller
public class UserController {

	@Autowired
	private UserRepository userRepository;


	@RequestMapping("/user_profile")
	public String user(Model model, HttpServletRequest request){

		User user = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("user", user);
		ArrayList<Action> history = new ArrayList<Action>();
		ArrayList<Action> loans = new ArrayList<Action>();
		List<Action> actions = user.getActions();
		for (Action action : actions) {
			if (action.getDateLoanGiven() == null || action.getDateLoanReturn() == null) {
				loans.add(action);
			} else {
				history.add(action);
			}
		}
		model.addAttribute("history", history);
		model.addAttribute("loans", loans);
		boolean hasBiography = user.getBiography().length() > 0;
		model.addAttribute("biography", hasBiography);
		if (request.isUserInRole("ADMIN")) {
			model.addAttribute("admin",true);
		}
		model.addAttribute("profile", true);
		model.addAttribute("logged",true);

		return "userProfile";
	}
	
	@RequestMapping("/user_profile/edit/{id}")
	public String editUserProfile(Model model, @PathVariable Integer id, @RequestParam String firstName, @RequestParam String lastName1, @RequestParam String lastName2,
			@RequestParam String email, @RequestParam String telephone, @RequestParam MultipartFile avatar) {

		User user = userRepository.findOne(id);
		if( user != null ) {
			user.setFirstName(firstName);
			user.setLastName1(lastName1);
			user.setLastName2(lastName2);
			user.setEmail(email);
			user.setTelephone(telephone);
			String avatarName = user.getId().toString() + ".jpg";
			if (!avatarName.isEmpty()) {
				try {
					File filesFolder = new File("src/main/resources/static/img/avatars/");
					if (!filesFolder.exists()) {
						filesFolder.mkdirs();
					}
					File uploadedFile = new File(filesFolder.getAbsolutePath(), avatarName);
					avatar.transferTo(uploadedFile);
				} catch (Exception e) {
				}
				user.setAvatar(avatarName);
			}
			userRepository.save(user);
		}			

		return "redirect:/user_profile";
	}
	
	@RequestMapping("/user_profile/edit/biography/{id}")
	public String editUserBiography(Model model, @PathVariable Integer id, @RequestParam String biography) {

		User user = userRepository.findOne(id);
		user.setBiography(biography);
		userRepository.save(user);

		return "redirect:/user_profile";
	}
}
