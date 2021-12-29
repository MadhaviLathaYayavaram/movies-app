import { useState } from "react";
import {Counter} from "./counter";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Movie({name,rating,summary,poster}) {

  const styles = {color: rating<8 ? "crimson" :"teal" }; 
  const [show,setShow] = useState(true);
   const summaryStyles = {display : show ? "block" : "none"};

  return (
        <div className ="movie-container">
        <img src={poster}
          alt={name}
          className="movie-poster"></img>
        <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating" style={styles}>*{rating}</p>
        </div>
          
        <IconButton aria-label="hide" color='primary' onClick = {  () => setShow(!show)}>
        <ExpandLessIcon />
           {show ? "Hide" :"Show"} Description 
                   
        </IconButton>


      {/*
        <Button variant="text" onClick = {  () => setShow(!show)}>
      {show ? "Hide" :"Show"} Description </Button>  */}
  
        <p className="movie-summary" style={summaryStyles}>{summary}</p>
      
        <Counter />


        </div>

        );
}
