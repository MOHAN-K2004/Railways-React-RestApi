package com.Train.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="traindetails")
public class TrainEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)

	private int no;
	private int trainno;
	private String trainname;
	private String trainStartPoint;
	private String trainStartTime;
	private String trainEndPoint;
	private String trainEndTime;
	private int  distance_in_KM;
	private String classes;
	private String serviceDays;
	private int stops;
	private String duration;
	private String days;
	public TrainEntity(int no, int trainno, String trainname, String trainStartPoint, String trainStartTime,
			String trainEndPoint, String trainEndTime, int distance_in_KM, String classes, String serviceDays,
			int stops, String duration, String days) {
		super();
		this.no = no;
		this.trainno = trainno;
		this.trainname = trainname;
		this.trainStartPoint = trainStartPoint;
		this.trainStartTime = trainStartTime;
		this.trainEndPoint = trainEndPoint;
		this.trainEndTime = trainEndTime;
		this.distance_in_KM = distance_in_KM;
		this.classes = classes;
		this.serviceDays = serviceDays;
		this.stops = stops;
		this.duration = duration;
		this.days = days;
	}
	public TrainEntity() {
		super();
	}
	@Override
	public String toString() {
		return "TrainEntity [no=" + no + ", trainno=" + trainno + ", trainname=" + trainname + ", trainStartPoint="
				+ trainStartPoint + ", trainStartTime=" + trainStartTime + ", trainEndPoint=" + trainEndPoint
				+ ", trainEndTime=" + trainEndTime + ", distance_in_KM=" + distance_in_KM + ", classes=" + classes
				+ ", serviceDays=" + serviceDays + ", stops=" + stops + ", duration=" + duration + ", days=" + days
				+ "]";
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
	public String getTrainStartPoint() {
		return trainStartPoint;
	}
	public void setTrainStartPoint(String trainStartPoint) {
		this.trainStartPoint = trainStartPoint;
	}
	public String getTrainStartTime() {
		return trainStartTime;
	}
	public void setTrainStartTime(String trainStartTime) {
		this.trainStartTime = trainStartTime;
	}
	public String getTrainEndPoint() {
		return trainEndPoint;
	}
	public void setTrainEndPoint(String trainEndPoint) {
		this.trainEndPoint = trainEndPoint;
	}
	public String getTrainEndTime() {
		return trainEndTime;
	}
	public void setTrainEndTime(String trainEndTime) {
		this.trainEndTime = trainEndTime;
	}
	public int getDistance_in_KM() {
		return distance_in_KM;
	}
	public void setDistance_in_KM(int distance_in_KM) {
		this.distance_in_KM = distance_in_KM;
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
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
	

}
