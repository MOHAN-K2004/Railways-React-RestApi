package com.Train.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Train.Entity.PaymentEntity;
import com.Train.Repository.PaymentintRepository;

@Service

public class PaymentService implements PaymentInterface {
	@Autowired
	PaymentintRepository pr;

	@Override
	public List<PaymentEntity> getdetails() {
		return pr.findAll();
	}

	@Override
	public void savedata(PaymentEntity pe) {
		pr.save(pe);
		
	}

	@Override
	public void updatedata(PaymentEntity pe) {
		pr.save(pe);
		
	}

	@Override
	public void deletedata(int id) {
		pr.deleteById(id);
		
	}

	

	
	

}
