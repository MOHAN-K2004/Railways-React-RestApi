package com.Train.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Train.Entity.TrainInfo;
@Repository
public interface TrainInfoRepo extends JpaRepository<TrainInfo,Integer> {
    List<TrainInfo> findAllByTrainStartPointAndTrainEndPoint(String from, String to);
    
}
