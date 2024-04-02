package jk_java_practice_app.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesApplication {


	// starting point for the execution of a Java application
	public static void main(String[] args) {

		SpringApplication.run(MoviesApplication.class, args);
	}


}
