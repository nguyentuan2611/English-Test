package com.english_test.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.english_exam.common.CommonRes;
import com.english_test.model.BXHModel;
import com.english_test.model.UpdateScores;
import com.english_test.service.BxhService;

@RestController
@RequestMapping("/rest")
public class BxhController {
	@Autowired
	BxhService bxhService;
	
	@PostMapping("/updateScores")
	public CommonRes updateScores(@RequestBody UpdateScores obj){
		CommonRes res = new CommonRes();
		BXHModel userScore = new BXHModel();
		userScore.setId(obj.getId());
		userScore.setScore(obj.getScore());
		
		//check User exist in BXH 
		if(bxhService.checkUserExists(obj.getId()) != null) {
			float oldScores = bxhService.checkUserExists(obj.getId()).getScore();
			if( oldScores < obj.getScore()) {
				bxhService.save(userScore);
			}
			res.setData("Update complete!");
		}
		else {
			bxhService.save(userScore);
			res.setData("Insert complete!");
		}
		return res;
	}
	
	@GetMapping("/getRank")
	public CommonRes getRank() {
		CommonRes res = new CommonRes();
		res.setData(bxhService.getRank());
		return res;
	}
		
}
