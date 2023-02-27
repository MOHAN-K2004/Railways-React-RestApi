package com.Train.Service;

import java.util.List;

import com.Train.Entity.PaymentEntity;

public interface PaymentInterface {
	List<PaymentEntity> getdetails();
	public void savedata(PaymentEntity pe);
	public void updatedata(PaymentEntity pe);
	public void deletedata(int id);

}
