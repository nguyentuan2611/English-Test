package com.english_test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.english_exam.common.CommonRes;
import com.english_test.service.QuestionService;

@RestController
@RequestMapping("/rest")
public class QuestionController {
	@Autowired
	QuestionService questionService;
	
	@GetMapping("/getListQuestion")
	public CommonRes getListQuestion(){
		CommonRes res = new CommonRes();
		res.setData( questionService.getListQuestion());
		res.setMessage("get data sucess!");
		return res;
	}
		
}