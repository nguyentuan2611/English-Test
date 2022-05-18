package com.english_test.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "question")
public class QuestionsModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	@Column(name = "QUESTION")
	private String question;
	
	@Column(name = "OPTION1")
	private String option1;
	
	@Column(name = "OPTION2")
	private String option2;

	@Column(name = "OPTION3")
	private String option3;
	
	@Column(name = "OPTION4")
	private String option4;
	
	@Column(name = "TYPE_ID")
	private String typeId;
	
	
}
