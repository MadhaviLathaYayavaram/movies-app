import React from "react";
import { useParams } from "react-router-dom";

export function MovieDetails({movies}) {
    const {id} = useParams();
    const movie = movies[id];
  return (
    <div class="movie-details">
    <h1>    Movie Details of ({id}):  {movie.moviename}  </h1>

    <h3> Summary : {movie.summary}</h3>

    <iframe width="853" 
    height="480" 
    src={movie.trailer}
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    </div>
  );
}
