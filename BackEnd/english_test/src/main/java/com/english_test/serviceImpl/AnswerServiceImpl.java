package com.english_test.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.english_test.Repositories.AnswerRepository;
import com.english_test.model.AnswerModel;
import com.english_test.service.AnswerService;

@Service
public class AnswerServiceImpl implements AnswerService{
	@Autowired
	AnswerRepository answerRepository;
	
	@Override
	public boolean checkAnswer(Long id , String answer) {
		if(answerRepository.checkAnswer(id, answer) != null)
			return true;
		else return false;
	}
	
	@Override
	public List<AnswerModel> getListAnswer() {
		return answerRepository.findAll();
	}
}
