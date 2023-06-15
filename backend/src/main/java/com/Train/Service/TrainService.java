package com.Train.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.Train.Entity.TrainEntity;
import com.Train.Entity.TrainInfo;
import com.Train.Repository.TrainInfoRepo;
import com.Train.Repository.TrainRepository;

@Service
public class TrainService implements TrainServiceInterface {
	
	@Autowired
	private TrainRepository tr;
	@Autowired
	private TrainInfoRepo trainInfoRepo;
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

    public Page<TrainEntity> getpageing(int pagesize, int offset, String field) {
		Pageable pageable = PageRequest.of(pagesize, offset,Sort.by(field));
        return tr.findAll(pageable);
    }

    public TrainEntity getById(int id) {
        return tr.findById(id).get();
    }

    // public List<TrainEntity> getTrains(String from, String to) {
	// 	List<TrainInfo> trainInfos = trainInfoRepo.findAllByTrainStartPointAndTrainEndPoint(from,to);
	// 	System.out.println(trainInfos);
    //     return tr.findAllById(trainInfos);
    // }
	

}
