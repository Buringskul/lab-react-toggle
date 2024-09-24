import React, { useState } from "react";
import Board from "./Board";

function BoardSwitcher(props) {
  const [currentBoard, setCurrentBoard] = useState(0);
  const boards = Array.from(
      { length: props.numBoards },
      (_, i) => <Board key={i} index={i} selected={i === currentBoard} />,
  );

  function handleButton() {
    setCurrentBoard((currentBoard+1) % props.numBoards)
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleButton}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;