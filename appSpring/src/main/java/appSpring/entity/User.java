package appSpring.entity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	/*
	 * @ManyToMany
	 *
	 * @JoinTable(name="userActions", joinColumns={@JoinColumn(name="idUser",
	 * nullable=false)}, inverseJoinColumns={@JoinColumn(name="idAction",
	 * nullable=false)})
	 */
	/* private List<Action> userActions; */

	private String name;
	private String passwordHash;
	private String dni;
	private String firstName;
	private String lastName1;
	private String lastName2;
	private String email;
	private String telephone;
	private String address;

	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	// Constructor
	protected User() {
	}

	protected User(String name, String password, String dni, String firstName, String lastName1, String lastName2,
			String email, String telephone, String address, String... roles) {

		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.dni = dni;
		this.firstName = firstName;
		this.lastName1 = lastName1;
		this.lastName2 = lastName2;
		this.email = email;
		this.telephone = telephone;
		this.address = address;
		this.roles = new ArrayList<>(Arrays.asList(roles));
	} // Used by SpringData

	// Métodos getter/setters de los atributos
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setNameUser(String firstName) {
		this.firstName = firstName;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
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