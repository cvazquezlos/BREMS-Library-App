package appSpring.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Fine {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private Date finishDate;
	private Date initDate;
	
	@ManyToOne
	private ResourceCopy resourceCopy;

	@ManyToOne
	private User user;

	protected Fine() {
	}

	public Fine(Date initDate, Date finishDate, User user, ResourceCopy resourceCopy) {
		this.initDate = initDate;
		this.finishDate = finishDate;
		this.user = user;
		this.resourceCopy = resourceCopy;
	}
	
	public ResourceCopy getResourceCopy() {
		return resourceCopy;
	}

	public void setResourceCopy(ResourceCopy resourceCopy) {
		this.resourceCopy = resourceCopy;
	}

	public User getUser() {
		return user;
	}


	public Date getInitDate() {
		return initDate;
	}

	public void setInitDate(Date initDate) {
		this.initDate = initDate;
	}

	public Date getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}

	public User getUserr() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
