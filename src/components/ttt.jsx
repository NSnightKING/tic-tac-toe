

import React, { useState } from 'react';

const Square = ({ value, onClick }) => (
  <button onClick={onClick}>
    {value}
  </button>
);




const Board = () => {
   // initial value of all square
  const [squares, setSquares] = useState(Array(9).fill(null));
   // getting first player start with (X)
  const [xIsNext, setXIsNext] = useState(true);




  // indexing each square with value (X/O). here index is define as (i). 
  const handleClick = i => {
    const newSquares = squares.slice();
    // on the user click it shows either (X) or (O) depending upon state
    newSquares[i] = xIsNext ? 'X' : 'O';
    // new state where value is changed
    setSquares(newSquares);
     // after the (X) turn next turn goes to (O). It work as like loop 
    setXIsNext(!xIsNext);
  };





  

  // rendering squares through click to track the user where he/she is on
  const renderSquare = i => (
    <Square
      value={squares[i]}
      onClick={() => handleClick(i)}
    />
  );

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div>{status}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;






  const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  


  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
};


