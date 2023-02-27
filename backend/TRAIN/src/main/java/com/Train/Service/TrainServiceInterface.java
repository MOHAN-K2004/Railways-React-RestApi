package com.Train.Service;

import java.util.List;

import com.Train.Entity.TrainEntity;

public interface TrainServiceInterface {
	List<TrainEntity> gettraindatas();
	
	public void savedata(TrainEntity te);
	public void updatedata(TrainEntity te);
	public void deletedata(int id);

}
