package appSpring.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Resource {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String title;
	private String author;
	private String editorial;
	private String picture;
	private int copiesNumber;

	@Column(length = 1024)
	private String description;

	@OneToOne
	private ResourceType resourceType;

	@ManyToOne
	private Genre genre;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "resource")
	private List<ResourceCopy> copies = new ArrayList<ResourceCopy>();

	protected Resource() {
	}

	public Resource(String title, String author, String editorial, String description) {
		this.title = title;
		this.author = author;
		this.editorial = editorial;
		this.description = description;
	}

	public Resource(String title, String author, String editorial, String description, String picture) {
		this.title = title;
		this.author = author;
		this.editorial = editorial;
		this.description = description;
		this.picture = picture;
	}

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

	public int getCopiesNumber() {
		return copiesNumber;
	}

	public void setCopiesNumber(int copiesNumber) {
		this.copiesNumber = copiesNumber;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ResourceType getProductType() {
		return resourceType;
	}

	public void setProductType(ResourceType resourceType) {
		this.resourceType = resourceType;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	public List<ResourceCopy> getResourceCopies() {
		return copies;
	}

	public void setResourceCopies(List<ResourceCopy> copies) {
		this.copies = copies;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

}
