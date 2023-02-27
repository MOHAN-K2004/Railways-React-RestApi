package com.Train.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.Train.Entity.TrainEntity;
import com.Train.Repository.TrainRepository;

@Service
public class TrainService implements TrainServiceInterface {
	
	@Autowired
	private TrainRepository tr;
	@Override
	public List<TrainEntity> gettraindatas(){
		return tr.findAll();
		
	}

	public void savedata(TrainEntity te) {
		tr.save(te);	
	}
	public boolean isTrainExists(int trainno) {
		return tr.existsBytrainno(trainno);
	}
	@Override
	public void updatedata(TrainEntity te) {
		tr.save(te);
	}
	@Override
	public void deletedata(int id) {
		tr.deleteById(id);
	}
	

}
