package com.Train.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="userdetails")
public class SignupEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int no;
	private String firstName;
	private String lastName;
	private String dob;
	private char gender;
	private String mail;
	private String mobile;
	private String nationality;
	private String street;
	private String area;
	private String city;
	private String state;
	private String pass;
	public SignupEntity(int no, String firstName, String lastName, String dob, char gender, String mail, String mobile,
			String nationality, String street, String area, String city, String state,String pass) {
		super();
		this.no = no;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.gender = gender;
		this.mail = mail;
		this.mobile = mobile;
		this.nationality = nationality;
		this.street = street;
		this.area = area;
		this.city = city;
		this.state = state;
		this.pass = pass;
	}
	public SignupEntity() {
		super();
	}
	@Override
	public String toString() {
		return "SignupEntity [no=" + no + ", firstName=" + firstName + ", lastName=" + lastName + ", dob=" + dob
				+ ", gender=" + gender + ", mail=" + mail + ", mobile=" + mobile + ", nationality=" + nationality
				+ ", street=" + street + ", area=" + area + ", city=" + city + ", state=" + state + ", pass=" + pass
				+ "]";
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	


}
