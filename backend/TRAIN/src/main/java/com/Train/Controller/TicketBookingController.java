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

import com.Train.Entity.TicketBookingEntity;
import com.Train.Service.TicketBookingService;

@RestController
@CrossOrigin("*")
@RequestMapping("/ticketbookingdetails")
public class TicketBookingController {
	
	@Autowired
	TicketBookingService tbs;
	@GetMapping("/view")
    public List<TicketBookingEntity> getting(){
		return tbs.getdetails();
	}
	
	@PostMapping("/save")
	public void save(@RequestBody TicketBookingEntity tbe) {
		tbs.savedata(tbe);
	}
	@PutMapping("/update/{id}")
	public void update(@RequestBody TicketBookingEntity tbe,@PathVariable int id) {
		tbe.setNo(id);
		tbs.savedata(tbe);
		
	}
	@DeleteMapping("/delete/{id}")

		public void delete(@PathVariable int id) {
		tbs.deletedata(id);
		}
	
}
