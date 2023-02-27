package com.Train.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookingdetails")
public class TicketBookingEntity {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int no;
	private int trainno;
	private String passenger_name;
	private String travelling_date;
	private String no_of_adults;
	private String no_of_childs;
	private String passenger_age;
	private String passenger_gender;
	private String prefered_coach;
	private String prefered_class;
	private String prefered_seat;
	private String depature;
	private String arrival;
	
     public TicketBookingEntity(int no, int trainno, String passenger_name, String travelling_date, String no_of_adults,
			String no_of_childs, String passenger_age, String passenger_gender, String prefered_coach,
			String prefered_class, String prefered_seat, String depature, String arrival) {
		super();
		this.no = no;
		this.trainno = trainno;
		this.passenger_name = passenger_name;
		this.travelling_date = travelling_date;
		this.no_of_adults = no_of_adults;
		this.no_of_childs = no_of_childs;
		this.passenger_age = passenger_age;
		this.passenger_gender = passenger_gender;
		this.prefered_coach = prefered_coach;
		this.prefered_class = prefered_class;
		this.prefered_seat = prefered_seat;
		this.depature = depature;
		this.arrival = arrival;
	}




	@Override
	public String toString() {
		return "TicketBookingEntity [no=" + no + ", trainno=" + trainno + ", passenger_name=" + passenger_name
				+ ", travelling_date=" + travelling_date + ", no_of_adults=" + no_of_adults + ", no_of_childs="
				+ no_of_childs + ", passenger_age=" + passenger_age + ", passenger_gender=" + passenger_gender
				+ ", prefered_coach=" + prefered_coach + ", prefered_class=" + prefered_class + ", prefered_seat="
				+ prefered_seat + ", depature=" + depature + ", arrival=" + arrival + "]";
	}


	public TicketBookingEntity() {
		super();
	}

		public int getTrainno() {
		return trainno;
	}


	public void setTrainno(int trainno) {
		this.trainno = trainno;
	}

	public String getDepature() {
		return depature;
	}
	
	
	public void setDepature(String depature) {
		this.depature = depature;
	}
	
	
	public String getArrival() {
		return arrival;
	}
	
	
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}

	public int getNo() {
		return no;
	}


	public void setNo(int no) {
		this.no = no;
	}


	public String getPassenger_name() {
		return passenger_name;
	}


	public void setPassenger_name(String passenger_name) {
		this.passenger_name = passenger_name;
	}


	public String getTravelling_date() {
		return travelling_date;
	}


	public void setTravelling_date(String travelling_date) {
		this.travelling_date = travelling_date;
	}


	public String getNo_of_adults() {
		return no_of_adults;
	}


	public void setNo_of_adults(String no_of_adults) {
		this.no_of_adults = no_of_adults;
	}


	public String getNo_of_childs() {
		return no_of_childs;
	}


	public void setNo_of_childs(String no_of_childs) {
		this.no_of_childs = no_of_childs;
	}


	public String getPassenger_age() {
		return passenger_age;
	}


	public void setPassenger_age(String passenger_age) {
		this.passenger_age = passenger_age;
	}


	public String getPassenger_gender() {
		return passenger_gender;
	}


	public void setPassenger_gender(String passenger_gender) {
		this.passenger_gender = passenger_gender;
	}


	public String getPrefered_coach() {
		return prefered_coach;
	}


	public void setPrefered_coach(String prefered_coach) {
		this.prefered_coach = prefered_coach;
	}


	public String getPrefered_class() {
		return prefered_class;
	}


	public void setPrefered_class(String prefered_class) {
		this.prefered_class = prefered_class;
	}


	public String getPrefered_seat() {
		return prefered_seat;
	}


	public void setPrefered_seat(String prefered_seat) {
		this.prefered_seat = prefered_seat;
	}

	

}
