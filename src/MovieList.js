import { Movie } from './Movie';

export function MovieList({ movie }) {
  return (
    <div>
      <section className="movie-list">
        {movie.map(mv => <Movie moviename={mv.moviename}
          rating={mv.rating}
          summary={mv.summary}
          poster={mv.poster} />)}
      </section>
    </div>
  );
}
