package appSpring.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Resource {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String title;
	private String author;
	private String editorial;
<<<<<<< HEAD:appSpring/src/main/java/entity/Resource.java
	private String description;
	private ResourceType productType;
	private Genre genre;
=======
	
	@ManyToOne
	private ResourceType productType;

	@ManyToOne
	private Genre genre;

>>>>>>> jherel:appSpring/src/main/java/appSpring/entity/Resource.java
	
	// Constructor
	protected Resource() {} // Used by SpringData
	
	public Resource(String title, String author, String editorial, String description, ResourceType productType, Genre genre) {
		this.title = title;
		this.author = author;
		this.editorial = editorial;
		this.description = description;
		this.productType = productType;
		this.genre = genre;
	}
	
	// Métodos getter/setter de los atributos
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getAutor() {
		return author;
	}
	
	public void setAutor(String autor) {
		this.author = autor;
	}

	public String getEditorial() {
		return editorial;
	}

	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ResourceType getProductType() {
		return productType;
	}

	public void setProductType(ResourceType productType) {
		this.productType = productType;
	}

<<<<<<< HEAD:appSpring/src/main/java/entity/Resource.java
	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
=======
	public Genre getGenero() {
		return genre;
	}

	public void setGenero(Genre genero) {
		this.genre = genero;
>>>>>>> jherel:appSpring/src/main/java/appSpring/entity/Resource.java
	}

}
