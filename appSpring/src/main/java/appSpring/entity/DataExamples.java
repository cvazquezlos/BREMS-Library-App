package appSpring.entity;

import java.util.Calendar;
import java.util.GregorianCalendar;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

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
	@Autowired
	private ResourceCopyRepository resourceCopyRepository;
	@Autowired
	private FineRepository fineRepository;
	@Autowired
	private ActionRepository actionRepository;

    @PostConstruct
    private void initDatabase() {

    	// Data declaration
    	Action a1, a2, a3;
    	Fine fine;
    	Genre g1, g2, g3, g4;
    	ResourceType rt1, rt2;
    	Resource res1, res2, res3, res4;
    	ResourceCopy rc1,rc2,rc3, rc4,rc5, rc6, rc7;
    	User user1, user2, user3, user4;

		// Actions creation
		a1 = new Action(new GregorianCalendar(2017, Calendar.FEBRUARY, 13).getTime());
		a2 = new Action(new GregorianCalendar(2016, Calendar.DECEMBER, 22).getTime());
		actionRepository.save(a2);
		a3 = new Action(new GregorianCalendar(2016, Calendar.FEBRUARY, 5).getTime());
		actionRepository.save(a3);

    	// Users creation
    	user1 = new User("carlosv", "passc", "0000", "Carlos", "Vázquez", "Losada", "c.vazquezlosada@gmail.com", "656565066", "ROLE_USER");
    	userRepository.save(user1);
    	a1.setUser(user1);
		actionRepository.save(a1);
    	fine = new Fine(new GregorianCalendar(2015, Calendar.FEBRUARY, 13).getTime(), new GregorianCalendar(2015, Calendar.FEBRUARY, 20).getTime(), user1);
    	fineRepository.save(fine);
    	fine = new Fine(new GregorianCalendar(2015, Calendar.SEPTEMBER, 6).getTime(), new GregorianCalendar(2015, Calendar.SEPTEMBER, 13).getTime(), user1);
    	fineRepository.save(fine);
    	user2 = new User("sergiob", "passs", "0001", "Sergio", "Blay", "González", "blaybleybluy@gmail.com", "606000000", "ROLE_ADMIN", "ROLE_USER");
    	userRepository.save(user2);
    	user3 = new User("annyc", "passa", "0002", "Anny", "Saldaña", "Cervera", "annylashula@gmail.com", "606036000", "ROLE_USER");
    	userRepository.save(user3);
    	a2.setUser(user3);
		actionRepository.save(a2);
    	fine = new Fine(new GregorianCalendar(2014, Calendar.JULY, 4).getTime(), new GregorianCalendar(2014, Calendar.JULY, 11).getTime(), user3);
    	fineRepository.save(fine);
    	user4 = new User("jherelj", "passj", "0003", "Jorge Jherel", "Córdoba", "Proaño", "omocracko@gmail.com", "606036123", "ROLE_USER");
    	userRepository.save(user4);
    	a3.setUser(user4);
		actionRepository.save(a3);
    	fine = new Fine(new GregorianCalendar(2014, Calendar.MAY, 17).getTime(), new GregorianCalendar(2014, Calendar.MAY, 24).getTime(), user4);
    	fineRepository.save(fine);

    	// Data creation
		g1 = new Genre("Novela");
		g2 = new Genre("Fantasía");
		g3 = new Genre("Farándula");
		g4 = new Genre("Divulgación");
		genreRepository.save(g1);
		genreRepository.save(g2);
		genreRepository.save(g3);
		genreRepository.save(g4);

		rt1 = new ResourceType("Libro");
		rt2 = new ResourceType("Revista");
		resourceTypeRepository.save(rt1);
		resourceTypeRepository.save(rt2);

		res1 = new Resource("Cien años de soledad", "Gabriel García Márquez", "Editorial Sudamericana", "Cien años de soledad es una novela del escritor colombiano Gabriel "
				+ "García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las "
				+ "obras más traducidas y leídas en español.", "1.jpg");
		res1.setGenre(g1);
		res1.setProductType(rt1);
		resourceRepository.save(res1);
		

		rc1 = new ResourceCopy("CAS001");
		rc1.setResource(res1);
		resourceCopyRepository.save(rc1);
		rc2 = new ResourceCopy("CAS002");
		rc2.setResource(res1);
		resourceCopyRepository.save(rc2);
		rc3 = new ResourceCopy("CAS003");
		rc3.setResource(res1);
		resourceCopyRepository.save(rc3);

		res2 = new Resource("El principito", "Antoine de Saint-Exupéry", "Reynal & Hitchcock", "El principito es un cuento poético que viene acompañado de ilustraciones hechas "
				+ "con acuarelas por el mismo Saint-Exupéry. En él, un piloto se encuentra perdido en el desierto del Sahara después de que su avión sufriera una avería, pero para su sorpresa, "
				+ "es allí donde conoce a un pequeño príncipe proveniente de otro planeta. La historia tiene una temática filosófica, donde se incluyen críticas sociales dirigidas a la «extrañeza» "
				+ "con la que los adultos ven las cosas. Estas críticas a las cosas «importantes» y al mundo de los adultos van apareciendo en el libro a lo largo de la narración.", "2.jpg");
		res2.setGenre(g2);
		res2.setProductType(rt1);
		resourceRepository.save(res2);

		rc4 = new ResourceCopy("EPR001");
		rc4.setResource(res2);
		resourceCopyRepository.save(rc4);
		rc5 = new ResourceCopy("EPR002");
		rc5.setResource(res2);
		resourceCopyRepository.save(rc5);

		res3 = new Resource("Hola.com", "HOLA S.L.", "Hola S.L.", "La revista Hola es una publicación tanto impresa como electrónica, propiedad de la editora 'Hola S. L., que se dedica "
				+ "a comunicar acontecimientos recientes de la vida de la farándula principalmente, abordando también temas como moda, actualidad, belleza, mujer, hombre, cocina o decoración.", "3.jpg");
		res3.setGenre(g3);
		res3.setProductType(rt2);
		resourceRepository.save(res3);

		rc6 = new ResourceCopy("HCOM001");
		rc6.setResource(res3);
		resourceCopyRepository.save(rc6);

		res4 = new Resource("Muy Interesante", "G+J", "G+J", "Muy interesante es una revista mensual de divulgación y ciencia popular, creada y publicada por el Grupo G+J España.");

		res4.setGenre(g3);
		res4.setProductType(rt2);
		resourceRepository.save(res4);

		rc7 = new ResourceCopy("MUI001");
		rc7.setResource(res4);
		resourceCopyRepository.save(rc7);

    }

}
