import React from "react";
import MovieItem from "../MovieItem";

export default function MovieList({ movies }) {
  return (
    <>
      {movies.length ? (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            backdropPath={movie.backdropPath}
            overview={movie.overview}
            title={movie.title}
          />
        ))
      ) : (
        <h1>No Movies</h1>
      )}
    </>
  );
}
