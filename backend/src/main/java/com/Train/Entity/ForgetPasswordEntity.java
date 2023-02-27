	package com.Train.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="forgetpassworddetails")
public class ForgetPasswordEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int no;
	private String email;
	private String newpassword;
	private String confirmpassword;
	public ForgetPasswordEntity(int no, String email, String newpassword, String confirmpassword) {
		super();
		this.no = no;
		this.email = email;
		this.newpassword = newpassword;
		this.confirmpassword = confirmpassword;
	}
	public ForgetPasswordEntity() {
		super();
	}
	@Override
	public String toString() {
		return "ForgetPasswordEntity [no=" + no + ", email=" + email + ", newpassword=" + newpassword
				+ ", confirmpassword=" + confirmpassword + "]";
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNewpassword() {
		return newpassword;
	}
	public void setNewpassword(String newpassword) {
		this.newpassword = newpassword;
	}
	public String getConfirmpassword() {
		return confirmpassword;
	}
	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	

}
