package appSpring.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class UserAction{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@ManyToMany
	private List<User> user;
	private List<Action> action;
	
	
	// Constructor
	public UserAction() {} // Used by SpringData
	
	
	// Métodos getter/setters de los atributos
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public List<User> getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user.add(user);
	}
	
	public List<Action> getAction() {
		return action;
	}
	
	public void setAction(Action action) {
		this.action.add(action);
	} 
}
