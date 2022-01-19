import { Movie } from './Movie';

export function MovieList({ movies }) {
  return (
    <div>
      <section className="movie-list">
        {movies.map(mv => <Movie moviename={mv.moviename}
          rating={mv.rating}
          summary={mv.summary}
          poster={mv.poster} 
           id={movies.index} /> )
           
        }
        
      </section>
    </div>
  );
}
