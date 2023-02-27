package com.Train.Repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.Train.Entity.PaymentEntity;

public interface PaymentintRepository extends JpaRepository<PaymentEntity, Integer> {

	


}
