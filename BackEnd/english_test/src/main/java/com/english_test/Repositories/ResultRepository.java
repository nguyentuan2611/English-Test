package com.english_test.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.english_test.model.ResultModel;

@Repository
public interface ResultRepository extends JpaRepository<ResultModel, Long>{
	@Query(value = "select * from result_test where id_user = :id" , nativeQuery = true)
	List<ResultModel> getListById(Long id);
}
 