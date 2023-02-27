package com.Train.Service;

import java.util.List;

import com.Train.Entity.SignupEntity;

public interface Signupinterface {
	List<SignupEntity> getdetails();
	public void savedata(SignupEntity se);
	public void updatedata(SignupEntity se);
	public void deletedata(int id);

}
