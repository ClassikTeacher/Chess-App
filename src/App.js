import React, { useEffect, useMemo, useState } from "react";
import {arrBoard} from './board/index.js'
import BorderNumbDown from "./componets/BorderNumbDown";
import BorderNumbLeft from "./componets/BorderNumbLeft";
import { figurePattern } from './pattern/patternFigure'
import ChessBoard from "./componets/ChessBoard";
import Rook_w from './componets/UI/rook/Rook_w'
import Rook_b from './componets/UI/rook/Rook_b'
import Pawn_w from './componets/UI/pawn/Pawn_w'
import Pawn_b from './componets/UI/pawn/Pawn_b'
import Knight_w from './componets/UI/knight/knight_w'
import Knight_b from './componets/UI/knight/knight_b'
import Bishop_w from "./componets/UI/bishop/Bishop_w";
import Bishop_b from "./componets/UI/bishop/Bishop_b";
import King_w from "./componets/UI/king/King_w";
import King_b from "./componets/UI/king/King_b";
import Queen_w from "./componets/UI/queen/Queen_w";
import Queen_b from "./componets/UI/queen/Queen_b";
import Board from './board/Board.jsx'
import step from './context/useStep.js'
import { MovePlayer} from "./context/index.js";

function App() {
 
const [move, setMove] = useState(0)
const [count,setCount] = useState(0)
  
const createFigure = useMemo(()=>{
  
})




  return (
    <MovePlayer.Provider value={{
        move,
        setMove
    }}>
      <Board arrBoard={arrBoard} />
    </MovePlayer.Provider>
  );
}

export default App;
