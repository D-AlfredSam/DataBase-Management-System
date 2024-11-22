package com.samarundbms.DBMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DbmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(DbmsApplication.class, args);
		SpringApplication.run(controller.class, args);
	}
	@GetMapping("/")
	public String apiRoot(){
		return "<h1>Hello world</h1>";
	}
	@GetMapping("/root")
	public String apiRoo(){
		return "<h1>Hello Sam</h1>";
	}
}


