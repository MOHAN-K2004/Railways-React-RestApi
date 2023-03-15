package com.Train.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Train.Entity.SignupEntity;
import com.Train.Service.SignupService;

@RestController
@CrossOrigin("*")
@RequestMapping("Signup")
public class SignupController {
	@Autowired
	private SignupService ss;
	@GetMapping("/view")
	public List<SignupEntity> userdetails(){
		return ss.getdetails();
	}
	
	@PostMapping("/save")
	public String createuser(@RequestBody SignupEntity se) {
	  boolean isusernameexist=ss.isUserExists(se.getFirstName());
	  if(!isusernameexist) {
		  ss.savedata(se);
		  return "Successfully account created ";
		  }
	  else
	  {
		  return "Already this account is created";
	  }
	  
	}
	@PutMapping("/update/{id}")
	public void updatingdata(@RequestBody SignupEntity se,@PathVariable int id) {
		se.setNo(id);
		ss.savedata(se);
	}
	@DeleteMapping("/delete/{id}")
	public void deleting(@PathVariable int id) {
		ss.deletedata(id);
	}
	
}
