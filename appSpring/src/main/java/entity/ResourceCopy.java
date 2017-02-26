package entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="ProductsCopy")
public class ResourceCopy {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private Resource product;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "productCopy")
	private Set<Action> actions;
	
	private String locationCode;
	
	
	// Constructor
	public ResourceCopy() {
		// Used by SpringData
		locationCode = generatorCode();
	} 
	
	
	// Métodos getter/setter de los atributos
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}

	public String getLocationCode() {
		return locationCode;
	}
	
	public void setLocationCode(String locationCode) {
		this.locationCode = locationCode;
	}
	
	public Resource getProduct() {
		return product;
	}
	
	public void setProduct(Resource product) {
		this.product = product;
	}

	
	public String generatorCode() {
		
		int idGenero = this.getProduct().getGenero().getId();
		int idEjemplar = this.getId();
		String tituloProducto = this.getProduct().getTitle();
		String autorProducto = this.getProduct().getAutor();
		
		// El código está comnpuesto por idGenero|idEjemplar|Autor(2)|Titulo(2)
		String codigo = Integer.toString(idGenero) +
				 		Integer.toString(idEjemplar) +
				 		autorProducto.charAt(0) +  autorProducto.charAt(1) +
				 		tituloProducto.charAt(0) + tituloProducto.charAt(1);
		
		return codigo;
	}
	
}
