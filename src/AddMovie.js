import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { MovieList } from './MovieList';


export function AddMovie({movies,setMovies}) {
  const [moviename,setMovieName] = useState("");
  const [poster,setPoster] =useState("");
  const [rating, setRating] = useState("");
  const [summary,setSummary] = useState("");
    
          
    
          const adMovie = () => {
            const newMovie = {
                moviename:moviename, 
                poster:poster,
                rating:rating, 
                summary:summary,};

                 setMovies([...movies, newMovie]);
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

 <Button variant="contained" onClick={adMovie} >Add Movie</Button>

 </div>

);
}
