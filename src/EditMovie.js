import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { MovieList } from './MovieList';
import {useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export function EditMovie({movies,setMovies}) {
    
    
    const {id}= useParams();
        const history = useHistory();

    const movie = movies[id];

  const [moviename,setMovieName] = useState(movie.moviename);
  const [poster,setPoster] =useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary,setSummary] = useState(movie.summary);
  const [trailer,setTrailer] = useState(movie.poster);
    
          
    
          const updtMovie = () => {

            const updatedMovie = {
                moviename:moviename, 
                poster:poster,
                rating:rating, 
                summary:summary,
                trailer:trailer};

                const copyMovieList=[...movies];
                copyMovieList[id]=updatedMovie;

                 setMovies(copyMovieList);

                <MovieList
                 movies={movies} /> }
            
        
                  

  return ( 
    <div className='add-movie-container'>
    <h2 style={{color:'green'}}> Add A New Movie to the List</h2>
 
  <TextField id="moviename" label="Name" variant="outlined" 
value= {moviename} style={{width:'50%', padding:'10px'}}
onChange={(event) => setMovieName(event.target.value)}

/>
{/* <input placeholder='Name'
        value= {moviename}
onChange={(event) => setMovieName(event.target.value)}  />    
 <input placeholder='Poster URL'
 value={poster}
 onChange={(event) => setPoster(event.target.value)} /> */}

 <TextField id="poster" label="Poster" variant="outlined" 
value= {poster}  style={{width:'50%', padding:'10px'}}
onChange={(event) => setPoster(event.target.value)}

/>

<TextField id="rating" label="Rating" variant="outlined" 
value= {rating} style={{width:'50%', padding:'10px'}}
onChange={(event) => setRating(event.target.value)}

/>

{/*
 <input placeholder='Rating' 
 value={rating}
 onChange={(event) => setRating(event.target.value)}/>
 <input placeholder='summary'   value={summary}
onChange={(event) => setSummary(event.target.value)}/>   */}

<TextField id="summary" label="Summary" variant="outlined" 
value= {summary}  style={{width:'50%', padding:'10px'}}
onChange={(event) => setSummary(event.target.value)}

/>

<TextField id="trailer" label="Trailer (Embed Code)" variant="outlined" 
value= {trailer} style={{width:'50%', padding:'10px'}}
onChange={(event) => setTrailer(event.target.value)}

/>


 <Button variant="contained" onClick={updtMovie} >Update Movie</Button>
 
<Button variant="outlined"
              onClick ={() => history.push("/movies")}> Back
<ArrowBackIcon />
  </Button>

 </div>

);
}
