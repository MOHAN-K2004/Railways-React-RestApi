package com.Train.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Train.Entity.ForgetPasswordEntity;
import com.Train.Service.ForgetPasswordService;

@RestController
@RequestMapping("/forgetpassworddetails")
public class ForgetpasswordController {

	@Autowired
	public ForgetPasswordService pfs;
	
	@GetMapping("/view")
	public List<ForgetPasswordEntity> getting( ){
		return pfs.getdetails();
	}

	@PostMapping("/save")
	public void posting(@RequestBody ForgetPasswordEntity pfe) {
		pfs.savedata(pfe);
	}
	@PutMapping("/update")
	public void putting(@RequestBody ForgetPasswordEntity pfe,@RequestParam int no) {
		pfe.setNo(no);
		pfs.updatedata(pfe);
	}
	@DeleteMapping("/delete")
	public void deleting(@RequestParam int no) {
		pfs.deletedata(no);
		
	}
}
