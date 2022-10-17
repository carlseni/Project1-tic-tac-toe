import './App.css';
import Square from "./Square"
//destructure useState from React
import {useState} from 'react'

function App() {
  // Using array destructuring initialize the state for the games squares to an array of 9 empty strings
  //setSquares name of function
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  
  //initialize state of the player variable to a boolean of true
  //setPlayer name of function
  const [player, setPlayer] = useState(true);


  // resets the squares to empty when the reset button is clicked  
  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }


   
  const calculateWinner = (array) => {
    // lines = an array of arrays where each array is a winning combination
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

    //loop through lines 
    for (let i = 0; i < lines.length; i++) {
      // set variables for one array or one 'line' at each index of lines
      const [a, b, c] = lines[i];

      // check value of a and compare to b and c
      if (
        array[a] && 
        array[a] === array[b] &&
        array[a] === array[c]
      ) {
        return `${array[a]} won!`
      }
    }
    return "Who will win?";
}
  


  return (
    <div className="App">

<span>{calculateWinner(squares)}</span>

      <div className='container'>

      
        {/* map over the squares array and render the Square.jsx component for each item in the array */}
        {
          squares.map((value, index) => {
            return <Square squares={squares} setSquares={setSquares} player={player} setPlayer={setPlayer} squareValue={value} index={index}/>
          })
        }    
      
      
      </div>
       {/* reset button  */} 
       <button onClick={handleClick}>Reset</button>

         
    </div>

    
  );
}

export default App;
 