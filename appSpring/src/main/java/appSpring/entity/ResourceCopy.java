package appSpring.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class ResourceCopy {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    @ManyToOne
    private Resource resource;

    private String locationCode;

    protected ResourceCopy() {}
    
    public ResourceCopy(String locationCode) {
    	this.locationCode = locationCode;
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

    
    /**
     * Genera el código de localización en base al  idGenero|idEjemplar|Autor(2)|Titulo(2)
     * @return codigo
     */
    public void generatorCode() {
        
        int idGenero = this.getResource().getGenre().getId();
        int idEjemplar = this.getID();
        String tituloProducto = this.getResource().getTitle();
        String autorProducto = this.getResource().getAutor();
        
        // El código está comnpuesto por idGenero|idEjemplar|Autor(2)|Titulo(2)
        String codigo = Integer.toString(idGenero) +
                         Integer.toString(idEjemplar) +
                         autorProducto.charAt(0) +  autorProducto.charAt(1) +
                         tituloProducto.charAt(0) + tituloProducto.charAt(1);
        
        this.locationCode = codigo;
    }

}
