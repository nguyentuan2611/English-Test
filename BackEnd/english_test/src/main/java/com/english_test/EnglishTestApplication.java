package com.english_test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
(scanBasePackages = {"com.english_test.controller" , "com.english_test.serviceImpl" })
@EnableJpaRepositories("com.english_test.Repositories")
public class EnglishTestApplication {

	@Bean
	public WebMvcConfigurer config() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/rest/*").allowedOrigins("http:localhost:4200" ,"*");
			}
		};
	}
	public static void main(String[] args) {
		SpringApplication.run(EnglishTestApplication.class, args);
	}

}
