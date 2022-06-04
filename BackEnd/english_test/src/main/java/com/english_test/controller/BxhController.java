package com.english_test.controller;

import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.english_exam.common.CommonRes;
import com.english_test.model.BXHDTO;
import com.english_test.model.BXHModel;
import com.english_test.model.UpdateResult;
import com.english_test.model.UserModel;
import com.english_test.service.BxhService;
import com.english_test.service.UserService;

@RestController
@RequestMapping("/rest")
public class BxhController {
	@Autowired
	BxhService bxhService;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/updateScores")
	public CommonRes updateResult(@RequestBody UpdateResult obj){
		CommonRes res = new CommonRes();
		BXHModel userScore = new BXHModel();
		userScore.setId(obj.getId());
		userScore.setScore(obj.getScore());
		if(obj.getTimed() != "" || obj.getTimed() != null) {
			SimpleDateFormat sdf = new SimpleDateFormat("mm:ss");
			try {
				long ms = sdf.parse(obj.getTimed()).getTime();
				Time t = new Time(ms);
				userScore.setTimed(t);
			} catch (Exception e) {
				System.out.print(e);
				res.setMessage("Value of Timed is invalid!");
				res.setResCode("FAIL");
			}
		}
		
		//check User exist in BXH 
		Boolean check = false;
		if(bxhService.checkUserExists(obj.getId()) != null) {
			float oldScores = bxhService.checkUserExists(obj.getId()).getScore();
			Time oldTimed = bxhService.checkUserExists(obj.getId()).getTimed();
			//check old scores  vs new scores
			if( oldScores < obj.getScore()) {
				check = true;
			}
			//check old time vs new time
			if(userScore.getTimed().before(oldTimed)) {
				check = true;
			}
			if(check) {
				bxhService.save(userScore);
			}
			res.setMessage("Update scores complete!");
			res.setResCode("SUCCESS");
		}
		else {
			bxhService.save(userScore);
			res.setMessage("Update new scores complete!");
			res.setResCode("SUCCESS");
		}
		return res;
	}
	
	@GetMapping("/getRank")
	public CommonRes getRank() {
		CommonRes res = new CommonRes();
		List<UserModel> listUser = userService.getListUser();
		List<BXHModel> list = bxhService.getRank();
		
		List<BXHDTO> ls = new ArrayList();
		for (int i = 0; i < list.size(); i++) {
			BXHDTO bxh = new BXHDTO();
			bxh.setId(list.get(i).getId());
			bxh.setScores(list.get(i).getScore());
			String time = list.get(i).getTimed().toString();
			bxh.setTimed(time.substring(3));
			String fullName = findUserById(list.get(i).getId() , listUser).getFullName();
			bxh.setFullName(fullName);
			ls.add(bxh);
		}
		
		res.setData(ls);
		return res;
	}
	
	public UserModel findUserById(
			  Long id, List<UserModel> listUser) {

			    for (UserModel user : listUser) {
			        if (user.getId().equals(id)) {
			            return user;
			        }
			    }
			    return null;
	}
}
