package appSpring.entity;

<<<<<<< HEAD
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

=======
>>>>>>> carlos
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ElementCollection;
import javax.persistence.FetchType;
=======
>>>>>>> carlos

@Entity
public class User{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	/*@ManyToMany
	@JoinTable(name="userActions",
			   joinColumns={@JoinColumn(name="idUser", nullable=false)},
			   inverseJoinColumns={@JoinColumn(name="idAction", nullable=false)})*/
	/*private List<Action> userActions;*/
	
	private String nameUser;
	private String passwordHash;
	private String dni;
	private String name;
	private String lastName1;
	private String lastName2;
	private String email;
	private String telephone;
	private String address;
	
	@ElementCollection(fetch = FetchType.EAGER)
	 private List<String> roles;

	// Constructor
	public User(String nameUser, String password, String dni,
			String name, String lastName1, String lastName2,
			String email, String telephone, String address,
			String...roles) {
		
		this.nameUser = nameUser;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.dni = dni;
		this.name = name;
		this.lastName1 = lastName1;
		this.lastName2 = lastName2;
		this.email = email;
		this.telephone = telephone;
		this.address = address;
		this.roles = new ArrayList<>(Arrays.asList(roles));
		
	} 
	protected User() {} // Used by SpringData
	
	
	// Métodos getter/setters de los atributos
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNameUser() {
		return nameUser;
	}
	
	public void setNameUser(String nameUser) {
		this.nameUser = nameUser;
	}
	
	public String getPassword() {
		return passwordHash;
	}
	
	public void setPassword(String password) {
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
	}
	
	public String getDni() {
		return dni;
	}
	
	public void setDni(String dni) {
		this.dni = dni;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getLastName1() {
		return lastName1;
	}
	
	public void setLastName1(String lastName1) {
		this.lastName1 = lastName1;
	}
	
	public String getLastName2() {
		return lastName2;
	}
	
	public void setLastName2(String lastName2) {
		this.lastName2 = lastName2;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
}
