package com.english_test.service;

import java.util.List;

import com.english_test.model.AnswerModel;

public interface AnswerService {

	boolean checkAnswer(Long id, String answer);
	List<AnswerModel> getListAnswer();
}
