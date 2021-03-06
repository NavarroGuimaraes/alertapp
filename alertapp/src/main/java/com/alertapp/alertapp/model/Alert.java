package com.alertapp.alertapp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="alerts")
public class Alert {
	
	
	private long id; //The Alert Id	
	private String title;//The Alert title	
	private String description;//The Alert Description
	private Date createdAt; 		
	private Date seenAt;
	
	public Alert() {
		
	}
	
	public Alert(String title, String description, Date createdAt) {
		this.title = title;
		this.description = description;		
		this.createdAt = createdAt;
	}

	//----------------------------------------------
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	//----------------------------------------------
	
	
	//----------------------------------------------
	@Column(name = "title", nullable = false)
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	//----------------------------------------------
	
	
	//----------------------------------------------
	@Column(name = "description", nullable = true)
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	//----------------------------------------------
	
	
	//----------------------------------------------
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "createdAt", nullable = true)
	public Date getCreatedAt() {
		return createdAt;
	}
	
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	//----------------------------------------------
	
	//----------------------------------------------
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "seenAt", nullable = true)	
	public Date getSeenAt() {
		return seenAt;
	}

	public void setSeenAt(Date seenAt) {
		this.seenAt = seenAt;
	}
	//----------------------------------------------
	
}
