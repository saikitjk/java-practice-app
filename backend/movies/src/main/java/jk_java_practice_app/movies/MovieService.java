package jk_java_practice_app.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> allMovies(){

     //return movieRepository.findAll();
        List<Movie> movies = movieRepository.findAll();
        System.out.println("All movies retrieved: " + movies.toString());
        return movies;

    }

}
