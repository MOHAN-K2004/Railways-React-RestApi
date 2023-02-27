package com.Train.Service;

import java.util.List;

import com.Train.Entity.ForgetPasswordEntity;

public interface ForgetPasswordInterface {

	List<ForgetPasswordEntity> getdetails();
	public void savedata(ForgetPasswordEntity fpe);
	public void updatedata(ForgetPasswordEntity fpe);
	public void deletedata(int no);
}
