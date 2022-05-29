package com.english_test.model;

import java.sql.Date;
import java.sql.Time;

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
	private Long userId;
	
	@Column(name = "SCORES")
	private Float scores;
	
	@Column(name = "TIMED")
	private Time time;
	
	@Column(name = "DATE_TEST")
	private Date date_test;
	
	
}
