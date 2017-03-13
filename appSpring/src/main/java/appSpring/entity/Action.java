package appSpring.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Action {

	public static final int RESERVAR	= 0;
	public static final int PRESTAR		= 1;
	public static final int DEVOLVER	= 2;
	public static final int APLAZAR		= 3;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private Date date;
	private int actionType;

	@OneToOne
	private ResourceCopy copy;

	@ManyToOne
	private User user;

	@OneToOne(cascade = CascadeType.ALL)
	private Token token;

	// constructores
	protected Action() {
	}

	public Action(Date date) {
		this.date = date;
	}
	
	public Action(Date date, int actionType) {
		this.date = date;
		this.actionType = actionType;
	}


	
	// metodos
	public Integer getID() {
		return id;
	}

	public void setID(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public ResourceCopy getResource() {
		return copy;
	}

	public void setResource(ResourceCopy copy) {
		this.copy = copy;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getTypeAction() {
		return actionType;
	}

	public void setTypeAction(int typeAction) {
		this.actionType = typeAction;
	}

}
