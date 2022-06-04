package com.english_test.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.english_test.Repositories.BxhRepository;
import com.english_test.model.BXHModel;
import com.english_test.service.BxhService;

@Service
public class BxhServiceImpl implements BxhService{
	@Autowired
	BxhRepository bxhRepository;
	
	@Override
	public BXHModel checkUserExists(Long id) {
		return bxhRepository.checkUserExists(id);
	}
	
	@Override
	public BXHModel save(BXHModel obj) {
		return bxhRepository.save(obj);
	}
	
	@Override
	public List<BXHModel> getRank(){
		return bxhRepository.getListRank();
	}
	
	@Override
	public int getPositionById(Long id) {
		List<BXHModel> ls = bxhRepository.findAll();
		if(ls.size() >= 0) {
			for(int i = 0 ; i <= ls.size()  ; i++) {
				if(ls.get(i).getId() == id) {
					return i+1;
				}
			}
		}
		return 0;
		
	}
	
}
