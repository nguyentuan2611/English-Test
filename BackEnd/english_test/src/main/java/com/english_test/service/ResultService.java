package com.english_test.service;

import java.util.List;

import com.english_test.model.ResultModel;
import com.english_test.model.UpdateResult;

public interface ResultService {
	List<ResultModel> getListById(Long id);
	
	ResultModel save(ResultModel obj);
}
