package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@ComponentScan
@SpringBootApplication
@EnableAutoConfiguration
@EntityScan("com.example.model")
@EnableJpaRepositories("com.example.repository")
@ComponentScan(basePackages = "com.example.controller, com.example.services")

public class FirstWebAppApplication extends SpringBootServletInitializer {
	
	@Override 
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) { //to create deployable war file
		return application.sources(FirstWebAppApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(FirstWebAppApplication.class, args);
	}

}
