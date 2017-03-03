package appSpring.entity;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import appSpring.repository.UserRepository;
import appSpring.repository.*;

@Component
public class DataExamples {

	@Autowired
    private UserRepository userRepository;
	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private GenreRepository genreRepository;
	@Autowired
	private ResourceTypeRepository resourceTypeRepository;

    @PostConstruct
    private void initDatabase() {

    	// Users creation
    	userRepository.save(new User("carlosv", "passc", "0000", "Carlos", "Vázquez", "Losada", "c.vazquezlosada@gmail.com", "656565066", "Sierra de Guadarrama", "ROLE_USER"));
    	userRepository.save(new User("sergiob", "passs", "0001", "Sergio", "Blay", "González", "blaybleybluy@gmail.com", "606000000", "Calle de Chueca", "ROLE_ADMIN"));
    	userRepository.save(new User("annyc", "passa", "0002", "Anny", "Saldaña", "Cervera", "annylashula@gmail.com", "606036000", "Calle de los gangsters", "ROLE_USER"));
    	userRepository.save(new User("jherelj", "passj", "0003", "Jorge Jherel", "Córdoba", "Proaño", "omocracko@gmail.com", "606036123", "Calle de Chueca", "ROLE_USER"));

    	// Resources creation
    	Genre g1, g2, g3;
    	ResourceType rt1, rt2;
    	Resource book1, book2, book3;

		g1 = new Genre("Novela");
		g2 = new Genre("Fantasía");
		g3 = new Genre("Farándula");
		genreRepository.save(g1);
		genreRepository.save(g2);
		genreRepository.save(g3);

		rt1 = new ResourceType("Libro");
		rt2 = new ResourceType("Revista");
		resourceTypeRepository.save(rt1);
		resourceTypeRepository.save(rt2);

		book1 = new Resource("Cien años de soledad", "Gabriel García Márquez", "Editorial Sudamericana", "Cien años de soledad es una novela del escritor colombiano Gabriel "
				+ "García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las "
				+ "obras más traducidas y leídas en español.");
		book1.setGenre(g1);
		book1.setProductType(rt1);

		resourceRepository.save(book1);


		book2 = new Resource("El principito", "Antoine de Saint-Exupéry", "Reynal & Hitchcock", "El principito es un cuento poético que viene acompañado de ilustraciones hechas "
				+ "con acuarelas por el mismo Saint-Exupéry. En él, un piloto se encuentra perdido en el desierto del Sahara después de que su avión sufriera una avería, pero para su sorpresa, "
				+ "es allí donde conoce a un pequeño príncipe proveniente de otro planeta. La historia tiene una temática filosófica, donde se incluyen críticas sociales dirigidas a la «extrañeza» "
				+ "con la que los adultos ven las cosas. Estas críticas a las cosas «importantes» y al mundo de los adultos van apareciendo en el libro a lo largo de la narración.");
		book2.setGenre(g2);
		book2.setProductType(rt1);
		resourceRepository.save(book2);


		book3 = new Resource("Hola.com", "HOLA S.L.", "Hola S.L.", "La revista Hola es una publicación tanto impresa como electrónica, propiedad de la editora 'Hola S. L., que se dedica "
				+ "a comunicar acontecimientos recientes de la vida de la farándula principalmente, abordando también temas como moda, actualidad, belleza, mujer, hombre, cocina o decoración.");
		book3.setGenre(g3);
		book3.setProductType(rt2);

		resourceRepository.save(book3);

    }
}
