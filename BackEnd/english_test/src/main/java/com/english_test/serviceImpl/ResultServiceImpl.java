package com.english_test.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.english_test.Repositories.ResultRepository;
import com.english_test.model.ResultModel;
import com.english_test.model.UpdateResult;
import com.english_test.service.ResultService;

@Service
public class ResultServiceImpl implements ResultService {
	@Autowired ResultRepository resultRepository;
	
	@Override
	public List<ResultModel> getListById(Long id){
		return resultRepository.getListById(id);
	}
	
	@Override
	public ResultModel save(ResultModel obj) {
		return resultRepository.save(obj);
	}
}
