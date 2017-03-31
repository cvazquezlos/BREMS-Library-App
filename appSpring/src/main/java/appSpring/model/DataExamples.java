package appSpring.model;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

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
	private ActionRepository actionRepository;

	@PostConstruct
	private void initDatabase() {

		// Data declaration
		Action a1, a2, a3;
		Genre g1, g2, g3, g4, g5;
		ResourceType rt1, rt2, rt3;
		Resource res1, res2, res3, res4, res5;
		ResourceCopy rc1, rc2, rc3, rc4, rc5, rc6, rc7, rc8, rc9;
		User user1, user2, user3, user4;

		// Data creation
		g1 = new Genre("Novela");
		g2 = new Genre("Fantasía");
		g3 = new Genre("Farándula");
		g4 = new Genre("Divulgación");
		g5 = new Genre("Defecto");
		genreRepository.save(g1);
		genreRepository.save(g2);
		genreRepository.save(g3);
		genreRepository.save(g4);
		genreRepository.save(g5);

		rt1 = new ResourceType("Libro");
		rt2 = new ResourceType("Revista");
		rt3 = new ResourceType("Defecto");
		resourceTypeRepository.save(rt1);
		resourceTypeRepository.save(rt2);
		resourceTypeRepository.save(rt3);

		res1 = new Resource("Cien años de soledad", "Gabriel García Márquez", "Editorial Sudamericana",
				"Cien años de soledad es una novela del escritor colombiano Gabriel "
						+ "García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las "
						+ "obras más traducidas y leídas en español.",
				"1.jpg");
		res1.setGenre(g1);
		res1.setProductType(rt1);
		resourceRepository.save(res1);

		rc1 = new ResourceCopy();
		rc1.setResource(res1);
		rc1.generatorCode();
		resourceCopyRepository.save(rc1);
		rc1.setLocationCode(rc1.getLocationCode()+rc1.getID());
		resourceCopyRepository.save(rc1);
		rc2 = new ResourceCopy();
		rc2.setResource(res1);
		rc2.generatorCode();
		resourceCopyRepository.save(rc2);
		rc2.setLocationCode(rc2.getLocationCode()+rc2.getID());
		resourceCopyRepository.save(rc2);
		rc3 = new ResourceCopy();
		rc3.setResource(res1);
		rc3.generatorCode();
		resourceCopyRepository.save(rc3);
		rc3.setLocationCode(rc3.getLocationCode()+rc3.getID());
		resourceCopyRepository.save(rc3);
		res1.getNoReservedCopies().add(rc1.getLocationCode());
		res1.getNoReservedCopies().add(rc2.getLocationCode());
		res1.getNoReservedCopies().add(rc3.getLocationCode());
		resourceRepository.save(res1);

		res2 = new Resource("El principito", "Antoine de Saint-Exupéry", "Reynal & Hitchcock",
				"El principito es un cuento poético que viene acompañado de ilustraciones hechas "
						+ "con acuarelas por el mismo Saint-Exupéry. En él, un piloto se encuentra perdido en el desierto del Sahara después de que su avión sufriera una avería, pero para su sorpresa, "
						+ "es allí donde conoce a un pequeño príncipe proveniente de otro planeta. La historia tiene una temática filosófica, donde se incluyen críticas sociales dirigidas a la «extrañeza» "
						+ "con la que los adultos ven las cosas. Estas críticas a las cosas «importantes» y al mundo de los adultos van apareciendo en el libro a lo largo de la narración.",
				"2.jpg");
		res2.setGenre(g2);
		res2.setProductType(rt1);
		resourceRepository.save(res2);

		rc4 = new ResourceCopy();
		rc4.setResource(res2);
		rc4.generatorCode();
		resourceCopyRepository.save(rc4);
		rc4.setLocationCode(rc4.getLocationCode()+rc4.getID());
		resourceCopyRepository.save(rc4);
		rc5 = new ResourceCopy();
		rc5.setResource(res2);
		rc5.generatorCode();
		resourceCopyRepository.save(rc5);
		rc5.setLocationCode(rc5.getLocationCode()+rc5.getID());
		resourceCopyRepository.save(rc5);
		res2.getNoReservedCopies().add(rc4.getLocationCode());
		res2.getNoReservedCopies().add(rc5.getLocationCode());
		resourceRepository.save(res2);

		res3 = new Resource("Hola.com", "HOLA S.L.", "Hola S.L.",
				"La revista Hola es una publicación tanto impresa como electrónica, propiedad de la editora 'Hola S. L., que se dedica "
						+ "a comunicar acontecimientos recientes de la vida de la farándula principalmente, abordando también temas como moda, actualidad, belleza, mujer, hombre, cocina o decoración.",
				"3.jpg");
		res3.setGenre(g3);
		res3.setProductType(rt2);
		resourceRepository.save(res3);

		rc6 = new ResourceCopy();
		rc6.setResource(res3);
		rc6.generatorCode();
		resourceCopyRepository.save(rc6);
		rc6.setLocationCode(rc6.getLocationCode()+rc6.getID());
		resourceCopyRepository.save(rc6);
		res3.getNoReservedCopies().add(rc6.getLocationCode());
		resourceRepository.save(res3);

		res4 = new Resource("Muy Interesante", "G+J", "G+J",
				"Muy interesante es una revista mensual de divulgación y ciencia popular, creada y publicada por el Grupo G+J España.");
		res4.setGenre(g3);
		res4.setProductType(rt2);
		resourceRepository.save(res4);

		rc8 = new ResourceCopy();
		rc8.setResource(res4);
		rc8.generatorCode();
		resourceCopyRepository.save(rc8);
		rc8.setLocationCode(rc8.getLocationCode()+rc8.getID());
		resourceCopyRepository.save(rc8);
		rc9 = new ResourceCopy();
		rc9.setResource(res4);
		rc9.generatorCode();
		resourceCopyRepository.save(rc9);
		rc9.setLocationCode(rc9.getLocationCode()+rc9.getID());
		resourceCopyRepository.save(rc9);
		res4.getNoReservedCopies().add(rc8.getLocationCode());
		res4.getNoReservedCopies().add(rc9.getLocationCode());
		resourceRepository.save(res4);

		res5 = new Resource("Logia", "Francisco Ortega", "Planeta",
				"La historia narra las aventuras del exitoso novelista chileno Elías Miele (especie de alter ego de Ortega), un escritor de best seller del tipo conspirativo "
						+ "asentado en Estados Unidos debido a sus serios conflictos judiciales en Chile que se ve inmerso en una aventura similar a las que suele relatar en sus libros desde el "
						+ "momento en que dos colegas son asesinados.",
				"5.jpg");
		res5.setGenre(g1);
		res5.setProductType(rt1);
		resourceRepository.save(res5);

		rc7 = new ResourceCopy();
		rc7.setResource(res5);
		rc7.generatorCode();
		resourceCopyRepository.save(rc7);
		rc7.setLocationCode(rc7.getLocationCode()+rc7.getID());
		resourceCopyRepository.save(rc7);
		res5.getNoReservedCopies().add(rc7.getLocationCode());
		resourceRepository.save(res5);

		// Actions creation
		a1 = new Action(getDate(2017, 2, 13, 14, 23, 43));
		a2 = new Action(getDate(2016, 12, 22, 8, 45, 00));
		a3 = new Action(getDate(2016, 2, 5, 16, 00, 13));

		// Users creation
		user1 = new User("carlosv", "passc", "0000", "Carlos", "Vázquez", "Losada", "c.vazquezlosada@gmail.com",
				"656565066", "ROLE_USER");
		userRepository.save(user1);
		a1.setUser(user1);
		a1.setResource(rc1);
		actionRepository.save(a1);
		user1.setAvaibleLoans(user1.getAvaibleLoans()-1);
		userRepository.save(user1);
		Resource resourceSelected = resourceRepository.findOne(rc1.getResource().getId());
		ArrayList<String> avaibleCopies = resourceSelected.getNoReservedCopies();
		avaibleCopies.remove(0);
		resourceSelected.setNoReservedCopies(avaibleCopies);
		resourceRepository.save(resourceSelected);


		user2 = new User("sergiob", "passs", "0001", "Sergio", "Blay", "González", "blaybleybluy@gmail.com",
				"606000000", "ROLE_ADMIN", "ROLE_USER");
		userRepository.save(user2);

		user3 = new User("annyc", "passa", "0002", "Anny", "Saldaña", "Cervera", "annylashula@gmail.com", "606036000",
				"ROLE_USER");
		userRepository.save(user3);
		a2.setUser(user3);
		a2.setResource(rc2);
		actionRepository.save(a2);
		user3.setAvaibleLoans(user3.getAvaibleLoans()-1);
		userRepository.save(user3);
		resourceSelected = resourceRepository.findOne(rc3.getResource().getId());
		avaibleCopies = resourceSelected.getNoReservedCopies();
		avaibleCopies.remove(0);
		resourceSelected.setNoReservedCopies(avaibleCopies);
		resourceRepository.save(resourceSelected);


		user4 = new User("jherelj", "passj", "0003", "Jorge Jherel", "Córdoba", "Proaño", "jh9@gmail.com", "606036123",
				"ROLE_USER");
		userRepository.save(user4);
		a3.setUser(user4);
		a3.setResource(rc4);
		actionRepository.save(a3);
		user4.setAvaibleLoans(user4.getAvaibleLoans()-1);
		userRepository.save(user4);
		resourceSelected = resourceRepository.findOne(rc4.getResource().getId());
		avaibleCopies = resourceSelected.getNoReservedCopies();
		avaibleCopies.remove(0);
		resourceSelected.setNoReservedCopies(avaibleCopies);
		resourceRepository.save(resourceSelected);
	}

	private static Date getDate(int year, int month, int day, int hour, int minute, int second) {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.YEAR, year);
        cal.set(Calendar.MONTH, month);
        cal.set(Calendar.DAY_OF_MONTH, day);
        cal.set(Calendar.HOUR_OF_DAY, hour);
        cal.set(Calendar.MINUTE, minute);
        cal.set(Calendar.SECOND, second);
        cal.set(Calendar.MILLISECOND, 0);
        return cal.getTime();
    }

}
