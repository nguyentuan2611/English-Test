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
@Table(name = "result_test")
public class ResultModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	@Column(name = "ID_USER")
	private String userId;
	
	@Column(name = "SCORES")
	private String scores;
	
	@Column(name = "DATE_TEST")
	private String date_test;
	
	
}
