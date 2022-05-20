package com.english_test.service;

import java.util.List;

import com.english_test.model.UserLogin;
import com.english_test.model.UserModel;

public interface UserService {

	List<UserModel> getListUser();
	UserModel checkLogin(String userName , String password);
	UserModel register(UserModel user);
	UserModel checkDuplicate(String userName);
}
