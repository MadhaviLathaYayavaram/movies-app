import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);
    return (
        <div className="counter"  >
          
            <IconButton aria-label="likesDislikes" color="primary" 
                        className="likes-dislikes" onClick = {() => {setLike (like+1);}}  >
            <Badge badgeContent={like} color="primary" >
          👍
          </Badge>
          </IconButton>
            {/*<button className="likes-dislikes" onClick = {() => {setLike (like+1);}} >  👍 {like} </button>
            <button className="likes-dislikes" onClick= {() => {setDislike (dislike+1);}} > {dislike} 👎 </button> */}

           <IconButton aria-label="likesDislikes" color="primary" 
                        className="likes-dislikes" onClick = {() => {setDislike (dislike+1);}}>
             <Badge badgeContent={dislike} color="error">
             👎
          </Badge>             
        
          </IconButton>
        
        </div>
    )
}

