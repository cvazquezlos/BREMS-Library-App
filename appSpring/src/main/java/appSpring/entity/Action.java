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
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private Date dateLoanInit;
	private Date dateLoanGiven;
	private Date dateLoanReturn;

	@ManyToOne
	private ResourceCopy copy;

	@ManyToOne
	private User user;

	@OneToOne(cascade = CascadeType.ALL)
	private Token token;

	protected Action() {
	}

	public Action(Date dateLoanInit) {
		this.dateLoanInit = dateLoanInit;
		dateLoanReturn = null;
		dateLoanGiven = null;
	}

	public Integer getID() {
		return id;
	}

	public void setID(Integer id) {
		this.id = id;
	}

	public Date getDateLoanInit() {
		return dateLoanInit;
	}

	public void setDateLoanInit(Date dateLoanInit) {
		this.dateLoanInit = dateLoanInit;
	}

	public Date getDateLoanGiven() {
		return dateLoanGiven;
	}

	public void setDateLoanGiven(Date dateLoanGiven) {
		this.dateLoanGiven = dateLoanGiven;
	}

	public Date getDateLoanReturn() {
		return dateLoanReturn;
	}

	public void setDateLoanReturn(Date dateLoanReturn) {
		this.dateLoanReturn = dateLoanReturn;
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

}
