package appSpring.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class User{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@ManyToMany
	@JoinTable(name="userActions",
			   joinColumns={@JoinColumn(name="idUser", nullable=false)},
			   inverseJoinColumns={@JoinColumn(name="idAction", nullable=false)})
	private List<Action> userActions;
	
	private String nameUser;
	private String password;
	private String dni;
	private String name;
	private String lastName1;
	private String lastName2;
	private String email;
	private String telephone;
	private String address;
	
	
	// Constructor
	public User() {} // Used by SpringData
	
	
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
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
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
	
}
