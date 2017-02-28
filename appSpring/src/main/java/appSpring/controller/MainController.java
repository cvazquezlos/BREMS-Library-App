package appSpring.controller;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import appSpring.repository.GenreRepository;
import appSpring.repository.ResourceRepository;
import appSpring.repository.ResourceTypeRepository;
import entity.Genre;
import entity.Resource;
import entity.ResourceType;

@Controller
public class MainController {

	Genre g1, g2, g3;
	ResourceType rt1, rt2;

	@Autowired
	private ResourceRepository resourceRepo;
	@Autowired
	private GenreRepository genreRepo;
	@Autowired
	private ResourceTypeRepository resourceTypeRepo;

	@PostConstruct
	public void init() {

		g1 = new Genre("Novela");
		g2 = new Genre("Fantasía");
		g3 = new Genre("Farándula");
		genreRepo.save(g1);
		genreRepo.save(g2);
		rt1 = new ResourceType("Libro");
		rt2 = new ResourceType("Revista");
		resourceTypeRepo.save(rt1);
		resourceTypeRepo.save(rt2);
		resourceRepo.save(new Resource("Cien años de soledad", "Gabriel García Márquez", "Editorial Sudamericana", "Cien años de soledad es una novela del escritor colombiano Gabriel "
				+ "García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las "
				+ "obras más traducidas y leídas en español.", rt1, g1));
		resourceRepo.save(new Resource("El principito", "Antoine de Saint-Exupéry", "Reynal & Hitchcock", "El principito es un cuento poético que viene acompañado de ilustraciones hechas "
				+ "con acuarelas por el mismo Saint-Exupéry. En él, un piloto se encuentra perdido en el desierto del Sahara después de que su avión sufriera una avería, pero para su sorpresa, "
				+ "es allí donde conoce a un pequeño príncipe proveniente de otro planeta. La historia tiene una temática filosófica, donde se incluyen críticas sociales dirigidas a la «extrañeza» "
				+ "con la que los adultos ven las cosas. Estas críticas a las cosas «importantes» y al mundo de los adultos van apareciendo en el libro a lo largo de la narración."
				, rt1, g2));
		resourceRepo.save(new Resource("Hola.com", "HOLA S.L.", "Hola S.L.", "La revista Hola es una publicación tanto impresa como electrónica, propiedad de la editora 'Hola S. L., que se dedica "
				+ "a comunicar acontecimientos recientes de la vida de la farándula principalmente, abordando también temas como moda, actualidad, belleza, mujer, hombre, cocina o decoración.", rt2, g3));
	}

	@RequestMapping("/")
	public String books(Model model, Pageable page) {

		Page<Resource> resourcesBooks = resourceRepo.findByResourceType(rt1, new PageRequest(0, 50));
		Page<Resource> resourcesMagazines = resourceRepo.findByResourceType(rt2, new PageRequest(0, 50));
		model.addAttribute("books", resourcesBooks);
		model.addAttribute("magazines", resourcesMagazines);

		return "index";
	}

}
