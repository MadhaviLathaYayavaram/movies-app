import './App.css';
import { MovieList } from './MovieList';
import { useState } from 'react';
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {AddColor} from './AddColor';
import {AddMovie} from './AddMovie';
import {About} from './About';


    
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
           
           
        
    
      return (
        <div className='App'>

<ul>
        <li>
          <a href="/about">About MyMovies</a>
        </li>
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/somewhere">Name of the link</Link>
        </li>
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
          <Link to="/movielist">Movies</Link>
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

        <Route path="/about">
          {/* Match url display the below component */}
          <About />
        </Route>

        <Route path="/colorbox">
          <AddColor />
        </Route>

        <Route path="/movielist">
          <MovieList movie =  {movies}  /> 
        </Route>

        <Route path="/addmovie">
          <AddMovie movie = {movies} />
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

export default App;



