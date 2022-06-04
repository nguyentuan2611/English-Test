package com.english_test.controller;

import java.io.Console;
import java.sql.Date;
import java.sql.Time;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.english_exam.common.CommonRes;
import com.english_test.model.AnswerRespon;
import com.english_test.model.AnswerUser;
import com.english_test.model.BXHModel;
import com.english_test.model.CheckAnswer;
import com.english_test.model.ResultModel;
import com.english_test.model.UpdateResult;
import com.english_test.service.AnswerService;
import com.english_test.service.BxhService;
import com.english_test.service.ResultService;


@RestController
@RequestMapping("/rest")
public class AnswerController {
	@Autowired
	AnswerService answerService;
	
	@Autowired
	ResultService resultService;
	
	@Autowired
	BxhService bxhService;

	@PostMapping( value = "/checkAnswer" ) 
	public CommonRes checkAnswer(@RequestBody CheckAnswer answerUser) {
		CommonRes res = new CommonRes();
		Long id ;
		String answer;
		int numCorrect = 0;
		float scores = 0;
		//get number correct answer
		for(AnswerUser x : answerUser.getListAnswer()) {
			id = x.getId();
			answer = x.getAnswer();
			if(answerService.checkAnswer(id, answer)) {
				numCorrect ++;
			}
		}
		
		DecimalFormat df = new DecimalFormat("#.#");
		String result = df.format(0.3333 * numCorrect).replace(',', '.') ;  //total = 30
		scores =Float.parseFloat(result) ;
		
		

		AnswerRespon obj = new AnswerRespon();
		BXHModel bxh = new BXHModel();
		ResultModel updateObj = new ResultModel();
		
		//insert data into result table
		Date date = new Date(System.currentTimeMillis());
		updateObj.setUserId(answerUser.getId());
		updateObj.setScores(scores);
		updateObj.setDate_test(date);
		SimpleDateFormat sdf = new SimpleDateFormat("mm:ss");
		try {
			long ms = sdf.parse(answerUser.getTimed()).getTime();
			Time t = new Time(ms);
			updateObj.setTime(t);
			bxh.setTimed(t);
		} catch (Exception e) {
			System.out.print(e);
			res.setMessage("Value of Timed is invalid!");
			res.setResCode("FAIL");
		}
		resultService.save(updateObj);
		
		//insert data into bxh table
		bxh.setId(answerUser.getId());
		bxh.setScore(scores);
		////check User exist in BXH 
		Boolean check = true;
		if(bxhService.checkUserExists(answerUser.getId()) != null) {
			float oldScores = bxhService.checkUserExists(answerUser.getId()).getScore();
			Time oldTimed = bxhService.checkUserExists(answerUser.getId()).getTimed();
			//compare old scores  vs new scores
			if( scores < oldScores) {
				check = false;
			}
			else if(scores == oldScores){
				if(bxh.getTimed().after(oldTimed)) {
					check = false;
				}
			}
			//compare old time vs new time
			System.out.print(bxh.getTimed() + "_" + oldTimed);
			
		}
		obj.setNumRank(0);
		if(check) {
			bxhService.save(bxh);
			obj.setNumRank(bxhService.getPositionById(answerUser.getId()));
		}
		
		//return RESPONE to client
		obj.setNumCorrect(numCorrect);
		obj.setScores(result);
		obj.setTime(answerUser.getTimed());
		res.setData(obj);
		res.setMessage("Update scores complete!");
		res.setResCode("SUCCESS");
		return res;
	}
	
	@GetMapping("/getListAnswer")
	public CommonRes getListAnswer(){
		CommonRes res = new CommonRes();
		res.setData( answerService.getListAnswer());
		return res;
	}
		
}
