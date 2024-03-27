package jk_java_practice_app.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collation = "movies")
//below annotations are used to reduce boilerplate code in Java classes, especially for classes that are primarily used to hold data
@Data // it has getter setter methods
@AllArgsConstructor
@NoArgsConstructor //This constructor initializes all fields with default values
public class Movie {
    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;
    @DocumentReference // manual reference relationship
    private List<Review> reviewIds; // embedded relationship

}
