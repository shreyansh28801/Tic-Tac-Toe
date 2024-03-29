import React, { useState } from "react";
import "./App.css";
import Block from "./components/block";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  console.log("State", state);

  const checkWinner = (state: any[]) => {
    console.log("inside check winner");
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      console.log(state[a]," ",state[b]," ",state[c]);
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const handleBlockClick = (index: number) => {
    console.log("clicked on index : ", index);
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;
    console.log("befor check winner");
    setState(stateCopy);

    //check if someone won the tic-tac-toe
    const win = checkWinner(stateCopy);
    if (win) {
      alert(`${currentTurn} won the game`);
    }
    console.log("winwin ", win);

    setCurrentTurn(currentTurn === "X" ? "0" : "X");
  };

  return (
    <div className="board">
      <div className="row">
        <Block onclick={() => handleBlockClick(0)} value={state[0]} />
        <Block onclick={() => handleBlockClick(1)} value={state[1]} />
        <Block onclick={() => handleBlockClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onclick={() => handleBlockClick(3)} value={state[3]} />
        <Block onclick={() => handleBlockClick(4)} value={state[4]} />
        <Block onclick={() => handleBlockClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onclick={() => handleBlockClick(6)} value={state[6]} />
        <Block onclick={() => handleBlockClick(7)} value={state[7]} />
        <Block onclick={() => handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
