package com.Train.Entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "traininfo")
public class TrainInfo {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int no;
    private String trainStartPoint;
	private String trainStartTime;
	private String trainEndPoint;
	private String trainEndTime;
	private int  distance_in_KM;
	private String days;

    @OneToOne(mappedBy = "trainInfo")
    private TrainEntity trainEntity;
    
    public TrainInfo() {
        super();
    }
    public TrainInfo(int no, String trainStartPoint, String trainStartTime, String trainEndPoint, String trainEndTime,
            int distance_in_KM, String days) {
        this.no = no;
        this.trainStartPoint = trainStartPoint;
        this.trainStartTime = trainStartTime;
        this.trainEndPoint = trainEndPoint;
        this.trainEndTime = trainEndTime;
        this.distance_in_KM = distance_in_KM;
        this.days = days;
    }
    public int getNo() {
        return no;
    }
    public void setNo(int no) {
        this.no = no;
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
    public String getDays() {
        return days;
    }
    public void setDays(String days) {
        this.days = days;
    }

    
}
