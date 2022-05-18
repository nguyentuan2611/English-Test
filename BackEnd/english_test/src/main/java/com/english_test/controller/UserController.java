package com.english_test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.english_exam.common.CommonRes;
import com.english_test.model.UserLogin;
import com.english_test.model.UserModel;
import com.english_test.service.UserService;

@RestController
@RequestMapping("/rest")
public class UserController {
	@Autowired
	UserService userService;
	
	@PostMapping("/checkLogin")
	public CommonRes checkLogin(@RequestBody UserLogin userLogin) {
		CommonRes res = new CommonRes();
		String userName = userLogin.getUserName();
		String password = userLogin.getPassword();
		
		if(userService.checkLogin(userName, password) != null) {
			res.setData(userService.checkLogin(userName, password));			
		}
		else {
			res.setMessage("UserName or Password is incorrect!");	
		}
		return res;
	}
	
	@GetMapping("/getListUser")
	public List<UserModel> getListUser(){
		return userService.getListUser();
	}
	
	@PostMapping("/register")
	public CommonRes Register(@RequestBody UserLogin userLogin) {
		CommonRes res = new CommonRes();
		UserModel user = new UserModel();
		user.setUserName(userLogin.getUserName());
		user.setPassword(userLogin.getPassword());
		user.setFullName(userLogin.getFullName());
		user.setEmail(userLogin.getEmail());

		res.setData(userService.register(user));
		return res;
	}

}
