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

import appSpring.entity.Genre;
import appSpring.entity.Resource;
import appSpring.entity.User;
import appSpring.repository.GenreRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.UserRepository;

@Controller
public class SearchController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ResourceRepository resourceRepository;

	@Autowired
	private GenreRepository genreRepository;

	@RequestMapping(method = RequestMethod.GET, value = "/search")
	public String search(Model model, HttpServletRequest request, @RequestParam String mySearch) {
		if (request.isUserInRole("ADMIN") || request.isUserInRole("USER")) {
			User loggedUser = userRepository.findByName(request.getUserPrincipal().getName());
			model.addAttribute("user", loggedUser);
			model.addAttribute("logged", true);
		} else
			model.addAttribute("unlogged", true);
		if (request.isUserInRole("ADMIN"))
			model.addAttribute("admin", true);
		Page<Resource> search = resourceRepository
				.findByTitleLikeIgnoreCaseOrGenreNameLikeIgnoreCaseOrAuthorLikeIgnoreCaseOrEditorialLikeIgnoreCase(
						"%" + mySearch + "%", "%" + mySearch + "%", "%" + mySearch + "%", "%" + mySearch + "%",
						new PageRequest(0, 2));
		List<Genre> genres = genreRepository.findAll();
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

		Page<Resource> search = resourceRepository
				.findByTitleLikeIgnoreCaseOrGenreNameLikeIgnoreCaseOrAuthorLikeIgnoreCaseOrEditorialLikeIgnoreCase(
						"%" + mySearch + "%", "%" + mySearch + "%", "%" + mySearch + "%", "%" + mySearch + "%",
						new PageRequest(page, 2));
		model.addAttribute("items", search);

		return "listItemsPage";
	}

}
