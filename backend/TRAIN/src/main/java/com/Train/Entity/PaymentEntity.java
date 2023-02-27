package com.Train.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="paymentdetails")
public class PaymentEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int no;
	private String payment_Type;
	private String transaction_id;
	private String username;
	private String mobile_no;
	private double Amount;
	public PaymentEntity(int no, String payment_Type, String transaction_id, String username, String mobile_no,
			double amount) {
		super();
		this.no = no;
		this.payment_Type = payment_Type;
		this.transaction_id = transaction_id;
		this.username = username;
		this.mobile_no = mobile_no;
		Amount = amount;
	}
	public PaymentEntity() {
		super();
	}
	@Override
	public String toString() {
		return "PaymentEntity [no=" + no + ", payment_Type=" + payment_Type + ", transaction_id=" + transaction_id
				+ ", username=" + username + ", mobile_no=" + mobile_no + ", Amount=" + Amount + "]";
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getPayment_Type() {
		return payment_Type;
	}
	public void setPayment_Type(String payment_Type) {
		this.payment_Type = payment_Type;
	}
	public String getTransaction_id() {
		return transaction_id;
	}
	public void setTransaction_id(String transaction_id) {
		this.transaction_id = transaction_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobile_no() {
		return mobile_no;
	}
	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}
	public double getAmount() {
		return Amount;
	}
	public void setAmount(double amount) {
		Amount = amount;
	}
	
	

}
