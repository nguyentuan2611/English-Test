package com.english_test.controller;

import java.sql.Date;
import java.sql.Time;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.english_exam.common.CommonRes;
import com.english_test.model.ResultModel;
import com.english_test.model.UpdateResult;
import com.english_test.service.ResultService;

@RestController
@RequestMapping("/rest")
public class ResultController {
	@Autowired
	ResultService resultService;
	
	@PostMapping("/saveResult")
	public CommonRes saveResult(@RequestBody UpdateResult obj) {
		CommonRes res = new CommonRes();
		Date date = new Date(System.currentTimeMillis());
		
		ResultModel result = new ResultModel();
		result.setUserId(obj.getId());
		result.setDate_test(date);
		result.setScores(obj.getScore());
		SimpleDateFormat sdf = new SimpleDateFormat("hh:mm:ss");
		try {
			long ms = sdf.parse(obj.getTimed()).getTime();
			Time t = new Time(ms);
			result.setTime(t);
		} catch (Exception e) {
			System.out.print(e);
			res.setMessage("Value of Timed is invalid!");
			res.setResCode("FAIL");
		}
		resultService.save(result);

		res.setMessage("insert result complete!");
		res.setResCode("SUCCESS");
		return res;
		
	}
	
	@PostMapping("/getListResult")
	public CommonRes getListResult( Long id) {
		CommonRes res = new  CommonRes();
		if(resultService.getListById(id) != null) {
			res.setData(resultService.getListById(id));
			res.setMessage("Get list result success !");
			res.setResCode("SUCCESS");
		}
		else {
			res.setMessage("List result of User is null !");
			res.setResCode("FAIL");
		}
		return res;
	}
}
