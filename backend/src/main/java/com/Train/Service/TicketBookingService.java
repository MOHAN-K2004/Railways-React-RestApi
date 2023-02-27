package com.Train.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Train.Entity.TicketBookingEntity;
import com.Train.Repository.TicketBookingIntRepository;

@Service
public class TicketBookingService implements TicketBookingInterface {
	@Autowired
	  TicketBookingIntRepository tbr;

	@Override
	public List<TicketBookingEntity> getdetails() {
		return tbr.findAll();
	}

	@Override
	public void savedata(TicketBookingEntity tbe) {
		tbr.save(tbe);
		
	}

	@Override
	public void updatedata(TicketBookingEntity tbe) {
		tbr.save(tbe);
		
	}

	@Override
	public void deletedata(int id) {
		tbr.deleteById(id);
		
	}

	
	
	

}
