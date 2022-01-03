import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddColor() {
  const [color, setColor] = useState("blue");
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["blue", "orange"]);

  return (
    <div className='add-color-form'>
      {/*<input value={color} style={styles} placeholder="Enter a Color "
            onChange = {(event)=> setColor (event.target.value)}  /> */}

      <TextField id="standard-basic" label="Enter a Color" variant="standard" style={styles}
        onChange={(event) => setColor(event.target.value)} />

      {/*<button onClick={() =>setColors([...colors,color])} >  Add Color </button>*/}


      <Button variant="outlined" onClick={() => setColors([...colors, color])}>Outlined</Button>
      {colors.map((clr) => (<ColorBox color={clr} />))}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "50px",
    width: '200px',
    marginTop: '10px'
  };


  return (
    <div style={styles}>
    </div>
  );

}

export default AddColor;

