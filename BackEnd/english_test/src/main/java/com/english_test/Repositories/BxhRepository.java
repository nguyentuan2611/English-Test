package com.english_test.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.english_test.model.BXHModel;

@Repository
public interface BxhRepository extends JpaRepository<BXHModel, Long>{
	@Query(value = "update bxh set scores = :scores  where id = :id " , nativeQuery = true)
	void updateScoresUser(@Param("id")Long id , @Param("scores")float scores);
	
	@Query(value = "select * from bxh  where id = :id " , nativeQuery = true)
	BXHModel checkUserExists(@Param("id")Long id );
	
}
