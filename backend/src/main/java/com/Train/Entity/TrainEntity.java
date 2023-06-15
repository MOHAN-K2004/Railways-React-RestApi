package com.Train.Entity;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="traindetails")
public class TrainEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)

	private int no;
	private int trainno;
	private String trainname;
	private String classes;
	private String serviceDays;
	private int stops;
	private String duration;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "traininfo", referencedColumnName = "no")
	private TrainInfo trainInfo;


	
	public TrainEntity(int no, int trainno, String trainname, String classes, String serviceDays, int stops,
			String duration, TrainInfo trainInfo) {
		this.no = no;
		this.trainno = trainno;
		this.trainname = trainname;
		this.classes = classes;
		this.serviceDays = serviceDays;
		this.stops = stops;
		this.duration = duration;
		this.trainInfo = trainInfo;
	}

	public TrainEntity() {
		super();
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public int getTrainno() {
		return trainno;
	}

	public void setTrainno(int trainno) {
		this.trainno = trainno;
	}

	public String getTrainname() {
		return trainname;
	}

	public void setTrainname(String trainname) {
		this.trainname = trainname;
	}

	public String getClasses() {
		return classes;
	}

	public void setClasses(String classes) {
		this.classes = classes;
	}

	public String getServiceDays() {
		return serviceDays;
	}

	public void setServiceDays(String serviceDays) {
		this.serviceDays = serviceDays;
	}

	public int getStops() {
		return stops;
	}

	public void setStops(int stops) {
		this.stops = stops;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public TrainInfo getTrainInfo() {
		return trainInfo;
	}

	public void setTrainInfo(TrainInfo trainInfo) {
		this.trainInfo = trainInfo;
	}

	@Override
	public String toString() {
		return "TrainEntity [no=" + no + ", trainno=" + trainno + ", trainname=" + trainname + ", classes=" + classes
				+ ", serviceDays=" + serviceDays + ", stops=" + stops + ", duration=" + duration + ", trainInfo="
				+ trainInfo + "]";
	}

	

}
