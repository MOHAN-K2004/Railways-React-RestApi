package com.Train.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")

public class LoginController{
	@GetMapping("/login")
	public String login(@RequestParam String username,@RequestParam String password) {
	if(username.equals("Mohan@2004")&&password.equals("1234567890"))
		return "Login Sucessfully";
	else
		return "Enter valid username&password!";
	}

}
