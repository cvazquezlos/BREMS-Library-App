package appSpring.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
public class Action {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private Date date;

	@OneToOne
	private ResourceCopy copy;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Token token;

	protected Action() {}
	
	public Action(Date date, ResourceCopy copy){
		this.date = date;
		this.copy = copy;
	}

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
	
}
