package com.english_test.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.english_test.Repositories.UserRepository;
import com.english_test.model.UserLogin;
import com.english_test.model.UserModel;
import com.english_test.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;

	@Override
	public UserModel checkLogin(String userName, String password) {
		return userRepository.checkLogin(userName, password);
	}

	@Override
	public List<UserModel> getListUser() {
		return userRepository.findAll();
	}
	
	@Override
	public UserModel register(UserModel user) {
		return userRepository.save(user);
	}
	
	@Override
	public UserModel checkDuplicate(String userName) {
		return userRepository.checkDuplicate(userName);
	}
}
