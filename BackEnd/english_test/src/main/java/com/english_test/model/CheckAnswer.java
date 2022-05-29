package com.english_test.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CheckAnswer {
	private Long id;
	private List<AnswerUser> listAnswer;
	private String timed;
}
