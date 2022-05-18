package com.english_test.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.english_test.model.ResultModel;

@Repository
public interface ResultRepository extends JpaRepository<ResultModel, Long>{
	@Query(value = "select * from ResultModel GROUP BY userId ORDER BY scores DESC LIMIT 5 " , nativeQuery = true)
	List<ResultModel> getBXH();
}
 