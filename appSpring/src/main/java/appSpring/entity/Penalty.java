package appSpring.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Penalty {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private Date init_date;
	private Date finish_date;
	
	
	// Constructor used by SpringData
	protected Penalty() {}
	
	// - init date for penalty by user
	public Date getInit_date() {
		return init_date;
	}
	public void setInit_date(Date init_date) {
		this.init_date = init_date;
	}
	
	// - finish date for penalty by user
	public Date getFinish_date() {
		return finish_date;
	}
	public void setFinish_date(Date finish_date) {
		this.finish_date = finish_date;
	}
}
