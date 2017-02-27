package entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Resource {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String title;
	private String author;
	private String editorial;
	private String description;
	
	private ResourceType productType;
	private Genre genre;
	
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

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

}
