package com.Train.Repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Train.Entity.TrainEntity;
import com.Train.Entity.TrainInfo;


public interface TrainRepository extends JpaRepository<TrainEntity, Integer> {

	public boolean existsBytrainno(int trainno);

    // public List<TrainEntity> findAllBytrainInfo(List<TrainInfo> trainInfos);



}
