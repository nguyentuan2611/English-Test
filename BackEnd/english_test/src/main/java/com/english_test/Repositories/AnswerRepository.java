package com.english_test.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.english_test.model.AnswerModel;

public interface AnswerRepository extends JpaRepository<AnswerModel, Long>{
	@Query(value = "select * from AnswerModel  where id = :id and correctAnswer = :answer " , nativeQuery = true)
	Boolean checkAnswer(Long id , String answer);
}
