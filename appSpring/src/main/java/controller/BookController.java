package controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import appSpring.repository.GenreRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;
import entity.Genre;
import entity.Resource;
import entity.ResourceType;

@Controller
public class BookController {

	@Autowired
	private ResourceRepository resourceRepo;
	@Autowired
	private GenreRepository genreRepo;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;

	@PostConstruct
	public void init() {
		genreRepo.save(new Genre("Novela"));
		genreRepo.save(new Genre("Fantasía"));
		resourceTypeRepo.save(new ResourceType("Libro"));
		resourceTypeRepo.save(new ResourceType("Revista"));
		resourceRepo.save(new Resource("Cien años de soledad", "Gabriel García Márquez", "Editorial Sudamericana", "Cien años de soledad es una novela del escritor colombiano Gabriel "
				+ "García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las "
				+ "obras más traducidas y leídas en español.", new ResourceType("Libro"), new Genre("Novela")));
		resourceRepo.save(new Resource("El principito", "Antoine de Saint-Exupéry", "Reynal & Hitchcock", "El principito es un cuento poético que viene acompañado de ilustraciones hechas "
				+ "con acuarelas por el mismo Saint-Exupéry. En él, un piloto se encuentra perdido en el desierto del Sahara después de que su avión sufriera una avería, pero para su sorpresa, "
				+ "es allí donde conoce a un pequeño príncipe proveniente de otro planeta. La historia tiene una temática filosófica, donde se incluyen críticas sociales dirigidas a la «extrañeza» "
				+ "con la que los adultos ven las cosas. Estas críticas a las cosas «importantes» y al mundo de los adultos van apareciendo en el libro a lo largo de la narración."
				, new ResourceType("Libro"), new Genre("Fantasía")));
	}

	@RequestMapping("/")
	public String books(Model model) {
		model.addAttribute("libros", resourceRepo.findAll());

		return "index";
	}

	@RequestMapping(value="/books/{id}", method=RequestMethod.GET)
	public String bookProfile(Model model) {
		return "profileBook";
	}

}
