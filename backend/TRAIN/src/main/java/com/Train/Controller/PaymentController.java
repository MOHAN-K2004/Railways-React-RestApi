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

import com.Train.Entity.PaymentEntity;
import com.Train.Service.PaymentService;

@RestController
@RequestMapping("/paymentdetails")
public class PaymentController {

	@Autowired
	 PaymentService ps;
	@GetMapping("/view")
	public List<PaymentEntity> getting(){
		return ps.getdetails();
	}
	
	
	@PostMapping("/post")
	public void save(@RequestBody PaymentEntity pe) {
		ps.savedata(pe);
	}
	@PutMapping("/update")
	public void updatingdata(@RequestBody PaymentEntity pe,@RequestParam int id) {
		pe.setNo(id);
		ps.savedata(pe);
	}
	@DeleteMapping("/delete")
	public void deleteingdata(@RequestParam int id) {
		ps.deletedata(id);
	}
}
