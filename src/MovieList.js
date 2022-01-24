import { Movie } from './Movie';
import { useHistory } from "react-router-dom";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function MovieList({ movies, setMovies }) 

{
  const history = useHistory();

  return (
    
    <div>
      
      <section className="movie-list">
        {movies.map((mv, index) => <Movie moviename={mv.moviename}
          rating={mv.rating}
          summary={mv.summary}
          poster={mv.poster} 
           id={index} 
           deletebutton= {<DeleteIcon
           onClick={()=>
               {
               console.log ("Deleting the element : ", index);
               const deleteIdx = index;
               const reaminingMovies= movies.filter ((mv,idx)=> idx !== deleteIdx);
               console.log (reaminingMovies);
               setMovies (reaminingMovies);
               }
             } color="error">Delete
           </DeleteIcon>}

           editbutton = {<EditIcon style={{marginLeft:"auto"}}
           onClick={()=>
            
                history.push ("/movies/edit/"+index)}
              
            color="secondary">Edit 
           </EditIcon>}
            /> )
           
        }
        
      </section>
    </div>
  );
}
