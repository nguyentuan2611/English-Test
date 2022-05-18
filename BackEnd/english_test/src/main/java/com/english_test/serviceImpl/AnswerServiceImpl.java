package com.english_test.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.english_test.Repositories.AnswerRepository;
import com.english_test.service.AnswerService;

@Service
public class AnswerServiceImpl implements AnswerService{
	@Autowired
	AnswerRepository answerRepository;
	
	@Override
	public boolean checkAnswer(Long id , String answer) {
		return answerRepository.checkAnswer(id, answer);
	}
}
