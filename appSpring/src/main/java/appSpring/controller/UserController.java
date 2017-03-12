package appSpring.controller;

import java.io.File;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import appSpring.entity.User;
import appSpring.repository.UserRepository;

@Controller
public class UserController {

	@Autowired
	private UserRepository userRepository;


	@RequestMapping("/user_profile")
	public String user(Model model, HttpServletRequest request){

		User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
		model.addAttribute("user", loggedUser);
		
		// if the user has biography
		boolean hasBiography = loggedUser.getBiography().length() > 0;
		model.addAttribute("biography", hasBiography);
				
		
		// if the user is Admin
		if (request.isUserInRole("ADMIN")) {
			model.addAttribute("admin",true);
		}
		
		model.addAttribute("logged",true);

		return "userProfile";
	}
	
	@RequestMapping("/user_profile/edit/{id}")
	public String editUserProfile(Model model, @PathVariable Integer id, @RequestParam String firstName, @RequestParam String lastName1, @RequestParam String lastName2,
			@RequestParam String email, @RequestParam boolean viewTelephone, @RequestParam String telephone, @RequestParam MultipartFile avatar) {

		User user = userRepository.findOne(id);
		System.out.println(viewTelephone);

		if( user != null ) {
			user.setFirstName(firstName);
			user.setLastName1(lastName1);
			user.setLastName2(lastName2);
			user.setEmail(email);
			user.setTelephone(telephone);
			user.setViewTelephone(viewTelephone);
			
			// avantar del usuario
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
			
			System.out.println(user);

		}			

		return "redirect:/userProfile";
	}
	
	@RequestMapping("/userProfile/edit/biography/{id}")
	public String editUserBiography(Model model, @PathVariable Integer id, @RequestParam String biography) {

		User user = userRepository.findOne(id);

		if( user != null ) {
			user.setBiography(biography);
			userRepository.save(user);
			
			System.out.println(user);
		}			

		return "redirect:/userProfile";
	}
}
