package com.english_test.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.english_test.model.QuestionsModel;
import com.english_test.model.UserModel;

@Repository
public interface QuestionRepository extends JpaRepository<QuestionsModel, Long>{
	
}
