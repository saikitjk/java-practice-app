package jk_java_practice_app.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Movie> singleMovie(ObjectId id){ // Optional is to handle return is null sitation
        Optional<Movie> movie = movieRepository.findById(id);
        System.out.println("Found movie: " + movie.toString());
        return movie;
    }

}
