package com.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity
// With entity automatically table will be created when we run project
public class Customers {
	public Customers() {}
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
private int cid;
	@NotEmpty(message = "This Field cannot be empty")
private String cname;
	@NotEmpty(message = "This Field cannot be empty")
private String cemail;
	@NotEmpty(message = "This Field cannot be empty")
private String cadd;
@NotEmpty(message="This Field cannot be empty")
private String cjob;

	

public Customers(String name, String email, String add, String job) {
	// TODO Auto-generated constructor stub
	this.cname=name;
	this.cadd=add;
	this.cjob=job;
	this.cemail=email;
}
public String getCjob() {
	return cjob;
}
public void setCjob(String cjob) {
	this.cjob = cjob;
}
public String getCadd() {
	return cadd;
}
public void setCadd(String cadd) {
	this.cadd = cadd;
}
public int getCid() {
	return cid;
}
public void setCid(int cid) {
	this.cid = cid;
}
public String getCname() {
	return cname;
}
public void setCname(String cname) {
	this.cname = cname;
}
public String getCemail() {
	return cemail;
}
public void setCemail(String cemail) {
	this.cemail = cemail;
}

@Override
public String toString() {
	return "Customer Id: "+cid+" Name: "+cname+ "Address: "+cadd+" Email: "+cemail+" Customer Job "+cjob;
}

}
