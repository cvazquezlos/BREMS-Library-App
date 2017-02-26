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
	private String autor;
	private String editorial;
	
	private ResourceType productType;
	private Genre genero;

	
	// Constructor
	public Resource() {} // Used by SpringData	
	
	
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
		return autor;
	}
	
	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getEditorial() {
		return editorial;
	}

	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}

	public ResourceType getProductType() {
		return productType;
	}

	public void setProductType(ResourceType productType) {
		this.productType = productType;
	}

	public Genre getGenero() {
		return genero;
	}

	public void setGenero(Genre genero) {
		this.genero = genero;
	}

}
