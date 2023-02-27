package com.Train.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Train.Entity.ForgetPasswordEntity;
import com.Train.Repository.ForgetPasswordIntRepository;

@Service
public class ForgetPasswordService implements ForgetPasswordInterface {
	@Autowired ForgetPasswordIntRepository fpr;

	@Override
	public List<ForgetPasswordEntity> getdetails() {
		return fpr.findAll();
	}

	@Override
	public void savedata(ForgetPasswordEntity fpe) {
		fpr.save(fpe);
	}

	@Override
	public void updatedata(ForgetPasswordEntity fpe) {
		fpr.save(fpe);

	}

	@Override
	public void deletedata(int no) {
		fpr.deleteById(no);
		
		
	}



}
