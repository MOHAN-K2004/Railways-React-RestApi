package com.Train.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.Train.Entity.TicketBookingEntity;

public interface TicketBookingIntRepository extends JpaRepository<TicketBookingEntity, Integer> {

	

}
