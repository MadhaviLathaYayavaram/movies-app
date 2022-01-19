import './App.css';
import { MovieList } from './MovieList';
import { useState } from 'react';
import React from "react";
import { Switch, Route, Link, Redirect,useParams } from "react-router-dom";
import {AddColor} from './AddColor';
import {AddMovie} from './AddMovie';
import {About} from './About';
import { MovieDetails } from './MovieDetails';


    
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
                  
              const [movies, setMovies]= useState(INITIAL_MOVIES);

              
    
      return (       <div className='App'>

<ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/colorbox">ColorBox</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/addmovie">Add New Movie</Link>
        </li>
        


        {/* <li>
            <a href="/about" >Go to about</a>
          </li> */}
      </ul>

      <hr />

      <Switch>
        {/* Each route is case, eg. - case '/about': */}

        <Route exact path="/">
          This is Home
        </Route>

        <Route path="/about">
          {/* Match url display the below component */}
          <About />
        </Route>

        <Route path="/colorbox">
          <AddColor />
        </Route>
        <Route path="/films">
          <Redirect to ="/movies" />
        </Route>

        <Route path="/movies/:{id}">
            <MovieDts />
        </Route>

        <Route path = "/movies"  >
          <MovieList movies =  {movies}  /> 
        </Route>

        <Route path="/addmovie">
          <AddMovie movies = {movies} setMovies={setMovies}/>
        </Route>

        <Route path="**">
          <NotFound />
        </Route>
{/*
        <Route path="/">
          <Home />
        </Route>
*/}
      </Switch>


        </div>
  );
}

function NotFound () {
return (
  <div className='not-found-container'>
    <h2>Page Not Found - 404 Error!</h2>
    <img className='not-found-image' 
         src='data:image/jpeg;base64,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'
         alt='Page Not Found'
         ></img>

  </div>
)

}

function MovieDts() {
  const {id} = useParams();
  console.log (id);
return <div>
  
  <h1>
  Movie Dts {id}
</h1>;
</div>
}

export default App;



