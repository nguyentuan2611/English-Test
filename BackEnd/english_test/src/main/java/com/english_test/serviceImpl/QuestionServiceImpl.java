package com.english_test.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.english_test.Repositories.QuestionRepository;
import com.english_test.model.QuestionsModel;
import com.english_test.service.QuestionService;


@Service
public class QuestionServiceImpl implements QuestionService{
	
	@Autowired
	QuestionRepository questionRepository;
	
	@Override
	public List<QuestionsModel> getListQuestion(){
		return questionRepository.findAll();
	}
}
