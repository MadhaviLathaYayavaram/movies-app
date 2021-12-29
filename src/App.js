import './App.css';
import { MovieList } from './MovieList';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
    
    
     function App() {

      const INITIAL_MOVIES= [
        { moviename : "The Avengers",
        poster : "https://cdn.images.express.co.uk/img/dynamic/36/750x445/1119643.jpg",
        rating :  8,
        summary :"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name." ,
        },
    
        {moviename : "Interstellar",
          poster : "https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg",
          rating: 8.6,
          summary :"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
          },
          {moviename : "The Amazing Spider-man",
            poster :"https://occ-0-2596-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZGYSToVQc-zxEzN4we_OSaap722CgvuUVDLISWEFQ0VbNMzGsbU22kl2O2rqL97y2uQLsjpVeu3ev4dBMB19kE0964.jpg?r=632",
            rating :  9,
            summary: "In this reboot of the superhero franchise, high school lad Peter Parker learns to wield his newfound powers while facing down arch-villain The Lizard."
            },
            {moviename :"Iron man 2",
              poster :"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
              rating : 7,
              summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
              },
              {moviename:  "Baahubali",
                poster :  "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
                rating :  8,
                summary:  "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
                }
    
              ];
           
      const [moviename,setMovieName] = useState("");
      const [poster,setPoster] =useState("");
      const [rating, setRating] = useState("");
      const [summary,setSummary] = useState("");
        
      
       const [movies, setMovies]= useState(INITIAL_MOVIES);
      const addMovie = () => {
        const newMovie = {
            moviename:moviename, 
            poster:poster,
            rating:rating, 
            summary:summary,};
             setMovies([ ...movies, newMovie]);
          
            
      };
      return (
        <div className='App'>
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

       <Button variant="contained" onClick={addMovie} >Add Movie</Button>

       </div>

       <MovieList movie =  {movies}  /> 
      

      {/*<AddColor />*/}

      </div>
  );
}

export default App;


function AddColor() {
   const [color,setColor] = useState("blue");
   const styles = {backgroundColor: color};
   const [colors, setColors] = useState  (["blue","orange"]);

  return (
    <div className='add-color-form'>
      {/*<input value={color} style={styles} placeholder="Enter a Color "  
      onChange = {(event)=> setColor (event.target.value)}  /> */}
       
        <TextField id="standard-basic" label="Enter a Color" variant="standard"  style={styles}
        onChange = {(event)=> setColor (event.target.value)}  />

      {/*<button onClick={() =>setColors([...colors,color])} >  Add Color </button>*/}
       

        <Button variant="outlined" onClick={() =>setColors([...colors,color])}>Outlined</Button>
        {colors.map ((clr) => (<ColorBox color= {clr}/>  ))}
    </div>
  )
}

function ColorBox ({ color }) {
  const styles = {backgroundColor: color,
                  height : "50px",
                  width : '200px',
                  marginTop : '10px' };
   

    return (
      <div style = {styles}>
      </div>
    )


}