import { useState } from "react";
import {Counter} from "./counter";
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

export function Movie({moviename,rating, summary,poster}) {
  const movie = [{
    moviename:moviename, 
    poster:poster,
    rating:rating, 
    summary:summary,}];

  const styles = {color: movie.rating<8 ? "crimson" :"teal" }; 
  const [show,setShow] = useState(true);
   const summaryStyles = {display : show ? "block" : "none"};

  return (
        <div>
  
            <Card className ="movie-container">
        <img src={movie.poster}
          alt={movie.moviename}
          className="movie-poster"></img>
        <div className="movie-specs">
        <p className="movie-name">{movie.moviename}
        <IconButton aria-label="hide" color='primary' onClick = {  () => setShow(!show)}>

           {show ? <ExpandLessIcon /> :<ExpandMoreIcon />}  
                   
        </IconButton></p>
        <p className="movie-rating" style={styles}>*{movie.rating}</p>
        </div>
          
              {/*
        <Button variant="text" onClick = {  () => setShow(!show)}>
      {show ? "Hide" :"Show"} Description </Button>  */}
  
        <p className="movie-summary" style={summaryStyles}>{movie.summary}</p>

        <CardActions>
        <Counter />
        </CardActions>

        </Card>

        </div>
        );
        
}

export default Movie;
