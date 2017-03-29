package appSpring.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import appSpring.model.Genre;
import appSpring.model.Resource;
import appSpring.model.User;
import appSpring.service.GenreService;
import appSpring.service.ResourceService;
import appSpring.service.UserService;

@Controller
public class SearchController {

	@Autowired
	private UserService userService;
	@Autowired
	private ResourceService resourceService;
	@Autowired
	private GenreService genreService;

	@RequestMapping(method = RequestMethod.GET, value = "/search")
	public String search(Model model, HttpServletRequest request, @RequestParam String mySearch) {
		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userService.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);
		Page<Resource> search = resourceService
				.findByTitleLikeIgnoreCaseOrGenreNameLikeIgnoreCaseOrAuthorLikeIgnoreCaseOrEditorialLikeIgnoreCase(
						"%" + mySearch + "%", "%" + mySearch + "%", "%" + mySearch + "%", "%" + mySearch + "%",
						new PageRequest(0, 2));
		List<Genre> genres = genreService.findAll();
		if (search.getTotalElements() != 0)
			model.addAttribute("isEmpty", false);
		else
			model.addAttribute("isEmpty", true);
		model.addAttribute("searchName", mySearch);
		model.addAttribute("genres", genres);
		model.addAttribute("search", search);

		return "search";
	}

	@RequestMapping(method = RequestMethod.GET, value = "/moreSearch")
	public String moreSearch(Model model, @RequestParam int page, @RequestParam String mySearch) {

		Page<Resource> search = resourceService
				.findByTitleLikeIgnoreCaseOrGenreNameLikeIgnoreCaseOrAuthorLikeIgnoreCaseOrEditorialLikeIgnoreCase(
						"%" + mySearch + "%", "%" + mySearch + "%", "%" + mySearch + "%", "%" + mySearch + "%",
						new PageRequest(page, 2));
		model.addAttribute("items", search);

		return "listItemsPage";
	}

}
