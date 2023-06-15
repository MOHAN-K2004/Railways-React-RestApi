package com.Train.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Train.Entity.SignupEntity;
import com.Train.Repository.SignUpintRepository;

@Service
public class SignupService implements Signupinterface {

    @Autowired
    SignUpintRepository sr;
      
	@Override
	public List<SignupEntity> getdetails() {
		return sr.findAll();
	}

	public void savedata(SignupEntity se) {
		sr.save(se);
		
	}
	public boolean isUserExists(String firstname) {
		return sr.existsByMail(firstname);
	}
	

	@Override
	public void updatedata(SignupEntity se) {
		sr.save(se);
		
		
	}

	@Override
	public void deletedata(int id) {
		sr.deleteById(id);
	}

    public SignupEntity getLogin(String mail, String pass) {
		SignupEntity signupEntity = sr.findByMailAndPass(mail,pass);
		if(signupEntity==null)
        	return null;
		return signupEntity;
    }

	

}
