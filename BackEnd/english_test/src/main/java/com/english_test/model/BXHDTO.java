package com.english_test.model;

import java.sql.Time;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BXHDTO {
	private Long id;
	private String fullName;
	private float scores;
	private Time timed;
}
