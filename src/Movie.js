import { useState } from "react";
import {Counter} from "./counter";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

export function Movie({mv}) {
  const movies = [{
    moviename:mv.moviename, 
    poster:mv.poster,
    rating:mv.rating, 
    summary:mv.summary,}];

  const styles = {color: movies.rating<8 ? "crimson" :"teal" }; 
  const [show,setShow] = useState(true);
   const summaryStyles = {display : show ? "block" : "none"};

  return (
        <div>
         { movies.forEach (   

        <Card className ="movie-container">
        <img src={movies.poster}
          alt={movies.moviename}
          className="movie-poster"></img>
        <div className="movie-specs">
        <p className="movie-name">{movies.moviename}
        <IconButton aria-label="hide" color='primary' onClick = {  () => setShow(!show)}>

           {show ? <ExpandLessIcon /> :<ExpandMoreIcon />}  
                   
        </IconButton></p>
        <p className="movie-rating" style={styles}>*{movies.rating}</p>
        </div>
          
              {/*
        <Button variant="text" onClick = {  () => setShow(!show)}>
      {show ? "Hide" :"Show"} Description </Button>  */}
  
        <p className="movie-summary" style={summaryStyles}>{movies.summary}</p>

        <CardActions>
        <Counter />
        </CardActions>

        </Card>

        )  }
        </div>
        );
        
}

export default Movie;
