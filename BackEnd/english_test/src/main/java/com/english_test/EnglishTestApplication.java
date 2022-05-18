package com.english_test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
(scanBasePackages = {"com.english_test.controller" , "com.english_test.serviceImpl" })
@EnableJpaRepositories("com.english_test.Repositories")
public class EnglishTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(EnglishTestApplication.class, args);
	}

}
