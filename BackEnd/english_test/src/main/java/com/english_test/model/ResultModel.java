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

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Float getScores() {
		return scores;
	}

	public void setScores(Float scores) {
		this.scores = scores;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

	public Date getDate_test() {
		return date_test;
	}

	public void setDate_test(Date date_test) {
		this.date_test = date_test;
	}
	
	
	
	
}
