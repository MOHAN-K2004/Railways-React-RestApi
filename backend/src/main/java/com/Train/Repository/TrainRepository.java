package com.Train.Repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.Train.Entity.TrainEntity;


public interface TrainRepository extends JpaRepository<TrainEntity, Integer> {

	public boolean existsBytrainno(int trainno);
	

}
