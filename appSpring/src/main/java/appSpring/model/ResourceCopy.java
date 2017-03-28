package appSpring.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class ResourceCopy {

	public interface Basic {}
	public interface Fin {}
	public interface Reso {}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonView(Basic.class)
	private Integer id;

	@JsonView(Basic.class)
	private String locationCode;

	@ManyToOne
	@JsonView(Reso.class)
	private Resource resource;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "resourceCopy")
	@JsonView(Fin.class)
	private List<Fine> penalties;

	public ResourceCopy() {
	}

	public List<Fine> getPenalties() {
		return penalties;
	}

	public void setPenalties(List<Fine> penalties) {
		this.penalties = penalties;
	}

	public Integer getID() {
		return id;
	}

	public void setID(Integer id) {
		this.id = id;
	}

	public String getLocationCode() {
		return this.locationCode;
	}

	public void setLocationCode(String locationCode) {
		this.locationCode = locationCode;
	}

	public Resource getResource() {
		return this.resource;
	}

	public void setResource(Resource resource) {
		this.resource = resource;
	}

	public void generatorCode() {

		int idResource = this.getResource().getId();
		String resourceTitle = this.getResource().getTitle();
		String resourceAuthor = this.getResource().getAutor();

		// El código está comnpuesto por idGenero|idEjemplar|Autor(2)|Titulo(2)
		String locationCode = Integer.toString(idResource) + resourceAuthor.charAt(0)
				+ resourceAuthor.charAt(1) + resourceTitle.charAt(0) + resourceTitle.charAt(1);

		this.locationCode = locationCode;
	}

}
