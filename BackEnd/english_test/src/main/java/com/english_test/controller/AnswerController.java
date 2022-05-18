package com.english_test.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.english_exam.common.CommonRes;
import com.english_test.model.AnswerUser;
import com.english_test.service.AnswerService;


@RestController
@RequestMapping("/rest")
public class AnswerController {
	@Autowired
	AnswerService answerService;

	@PostMapping("/checkAnswer")
	public CommonRes checkAnswer(@RequestBody List<AnswerUser> answerUser) {
		CommonRes res = new CommonRes();
		Long id ;
		String answer;
		int numCorrect = 0;
		
		for(AnswerUser x : answerUser) {
			id = x.getId();
			answer = x.getAnswer();
			if(answerService.checkAnswer(id, answer)) {
				numCorrect ++;
			}
		}	
		res.setData(numCorrect);
		return res;
	}
	
	@GetMapping("/getListAnswer")
	public CommonRes getListAnswer(){
		CommonRes res = new CommonRes();
		res.setData( answerService.getListAnswer());
		return res;
	}
		
}
