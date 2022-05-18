package com.english_test.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "answer")
public class AnswerModel {
	@Id
	private Long Id;
	
	@Column(name = "ANSWER_CORRECT")
	private String correctAnswer;
}
