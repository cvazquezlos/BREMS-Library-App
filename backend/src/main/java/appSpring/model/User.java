package appSpring.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class User {

	public interface Basic {}
	public interface Act {}
	public interface Fin {}
	public interface ActionInt {}
	public interface FineInt {}
	public interface LoginInt {}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonView({Basic.class, ActionInt.class, FineInt.class, LoginInt.class})
	private Integer id;

	@Column(unique = true)
	@JsonView({Basic.class, ActionInt.class, FineInt.class, LoginInt.class})
	private String name;
	private String passwordHash;
	@JsonView(Basic.class)
	private String dni;
	@JsonView(Basic.class)
	private String firstName;
	@JsonView(Basic.class)
	private String lastName1;
	@JsonView(Basic.class)
	private String lastName2;
	@JsonView({Basic.class, LoginInt.class})
	private String email;
	@JsonView(Basic.class)
	private String telephone;
	@JsonView(Basic.class)
	private boolean viewTelephone;
	@JsonView(Basic.class)
	private String address;
	@JsonView(Basic.class)
	private String biography;
	private String avatar;
	@JsonView(Basic.class)
	private boolean hasPhoto;
	@JsonView({Basic.class, LoginInt.class})
	private int avaibleLoans;
	@JsonView(Basic.class)
	private boolean isBanned;

	@ElementCollection
	@JsonView(Basic.class)
	private List<String> literaryHobby;

	@OneToMany(cascade = CascadeType.ALL, mappedBy="user")
	@JsonView(Act.class)
	private List<Action> actions;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
	@JsonView(Fin.class)
	private List<Fine> penalties;

	@ElementCollection(fetch = FetchType.EAGER)
	@JsonView(Basic.class)
	private List<String> roles;

	protected User() {
	}

	public User(String name, String password, String dni, String firstName, String lastName1, String lastName2,
			String email, String telephone, String... roles) {

		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.dni = dni;
		this.firstName = firstName;
		this.lastName1 = lastName1;
		this.lastName2 = lastName2;
		this.email = email;
		this.telephone = telephone;
		this.setViewTelephone(false);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.biography = "Nací, crecí y vi un barco pasar.";
		this.hasPhoto = false;
		this.literaryHobby = new ArrayList<String>();
		this.literaryHobby.add("Ciencia ficción");
		this.literaryHobby.add("Terror");
		this.literaryHobby.add("Novela");
		this.literaryHobby.add("Literatura");
		this.literaryHobby.add("Drama");
		avaibleLoans = 3;
		this.isBanned = false;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
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

	public List<Fine> getFines() {
		return penalties;
	}

	public void setPenalty(List<Fine> penalties) {
		this.penalties = penalties;
	}

	public List<Action> getActions() {
		return actions;
	}

	public void setActions(List<Action> actions) {
		this.actions = actions;
	}

	public String getBiography() {
		return biography;
	}

	public void setBiography(String biography) {
		this.biography = biography;
	}

	public boolean isViewTelephone() {
		return viewTelephone;
	}

	public void setViewTelephone(boolean viewTelephone) {
		this.viewTelephone = viewTelephone;
	}

	public List<String> getLiteraryHobby() {
		return literaryHobby;
	}

	public void setLiteraryHobby(List<String> literaryHobby) {
		this.literaryHobby = literaryHobby;
	}

	public String toString() {
		return "User id: " + this.getId() +
				"\n firstName: " + this.firstName +
				"\n lastName1: " + this.lastName1 +
				"\n lastName2: " + this.lastName2 +
				"\n email: " + this.email +
				"\n telephone: " + this.telephone +
				"\n view telephone: " + this.isViewTelephone();
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public boolean getHasPhoto() {
		return hasPhoto;
	}

	public void setHasPhoto(boolean hasPhoto) {
		this.hasPhoto = hasPhoto;
	}

	public int getAvaibleLoans() {
		return this.avaibleLoans;
	}

	public void setAvaibleLoans(int avaibleLoans) {
		this.avaibleLoans = avaibleLoans;
	}

	public boolean getisBanned() {
		return this.isBanned;
	}

	public void setBanned(boolean b) {
		this.isBanned = b;
	}

}
