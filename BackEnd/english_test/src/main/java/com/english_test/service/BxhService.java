package com.english_test.service;

import java.util.List;
import java.util.Optional;

import com.english_test.model.BXHModel;

public interface BxhService {
	BXHModel checkUserExists(Long id);
	
	BXHModel save(BXHModel obj);
	
	List<BXHModel> getRank();
	
	int getPositionById(Long id);
}
