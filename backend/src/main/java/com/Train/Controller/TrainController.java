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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Train.Entity.TrainEntity;
import com.Train.Service.TrainService;

@RestController
@RequestMapping("/traindetails")
@CrossOrigin("*")
public class TrainController {
	
	@Autowired
	private TrainService ts;
	@GetMapping("/")
	public String welcome() {
		return "Welcome to the Railway Reservation System";
		
	}
	@GetMapping("/view")
	public List<TrainEntity> getting(){
		return ts.gettraindatas();
	}
	@GetMapping("/pagenation/{pagesize}/{offset}/{field}")
	public List<TrainEntity> getpagenation(@PathVariable int pagesize,@PathVariable int offset, @PathVariable String field){
         return ts.getpageing(pagesize,offset,field).getContent();
	}

	// @GetMapping("/gettrain")
	// public List<TrainEntity> getTrains(@RequestParam String from,@RequestParam String to){
	// 	return ts.getTrains(from,to);
	// }

	@GetMapping("/getById")
	public TrainEntity getById(@RequestParam int id)
	{
		return ts.getById(id);
	}
	
	
	
	@PostMapping("/save")
	public String  savedata(@RequestBody TrainEntity tre) {
		boolean istrainnoexist=ts.isTrainExists(tre.getTrainno());
		if(!istrainnoexist) {
			ts.savedata(tre);
			return "Train details are posted!";
		}
		else {
			return "This train details already here!";
		}
		
		
	}
	@PutMapping("/update/{id}")
	public void updatedata(@RequestBody TrainEntity tre,@PathVariable int id) {
		tre.setNo(id);
		ts.savedata(tre);
	}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		ts.deletedata(id);
	}

}


