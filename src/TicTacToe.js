import Confetti from "react-confetti";
import { useState } from 'react';
import React from "react";
import { useWindowSize } from "react-use";
export function TicTacToe() {

const {width, height} = useWindowSize();

const  [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]);
// useState ([0,1,2,3,4,5,6,7,8]);

const [isXTurn, setIsXTurn] = useState(true);

const decideWinner = (board) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] ];

    // if winning condition is present on the board, then it is winner

    for (let i =0; i < lines.length; i++) {
        const [a,b,c] = lines[i];

        if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
           console.log ("Winner is ", board[a]);
           return board[a];
    } }
            return null;
}

    const winner = decideWinner (board);

    const handleClick = (index) => {

        if (winner=== null && !board[index]) {
        const boardCopy = [...board];
        boardCopy[index] = isXTurn ? "X" : "O";
        setBoard(boardCopy);
        //Toggle X turn
        setIsXTurn (!isXTurn);
    }
};

   return (
       <div className = "full-game">
           {winner ? <Confetti width={width} height={height} gravity={0.03} /> : ""}

        <div className = "board">
            {board.map((val, index) => (
                <GameBox val = {val} onPlayerClick={() => handleClick(index)} />
             ))}
        </div>
        {
            winner ? <h2> The Winner is : {winner}</h2> : ""
        }
       </div>
   );



    function GameBox({ onPlayerClick, val}) {
        const styles = {color: val==="X" ? "green" : "red"};
        return (
            <div style={styles} onClick={onPlayerClick}
                    className="game-box">

                    {val}
                    </div>
        );

    }


}

