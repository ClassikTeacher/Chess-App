import React, { useContext, useEffect, useMemo, useState } from "react";

import Rook_w from '../componets/UI/rook/Rook_w'
import Rook_b from '../componets/UI/rook/Rook_b'
import Pawn_w from '../componets/UI/pawn/Pawn_w'
import Pawn_b from '../componets/UI/pawn/Pawn_b'
import Knight_w from '../componets/UI/knight/knight_w'
import Knight_b from '../componets/UI/knight/knight_b'
import Bishop_w from "../componets/UI/bishop/Bishop_w";
import Bishop_b from "../componets/UI/bishop/Bishop_b";
import King_w from "../componets/UI/king/King_w";
import King_b from "../componets/UI/king/King_b";
import Queen_w from "../componets/UI/queen/Queen_w";
import Queen_b from "../componets/UI/queen/Queen_b";
import BorderNumbDown from ".././componets/BorderNumbDown";
import BorderNumbLeft from ".././componets/BorderNumbLeft";
import ChessBoard from ".././componets/ChessBoard";
import { step } from "../context/useStep";
import { MovePlayer } from "../context";







function Board(props){
  const [rowsCells, setRowsCells] = useState([
    
  ])
  const {move,setMove} = useContext(MovePlayer)
 
 
  useMemo(()=>{
   
    setRowsCells(props.arrBoard)
    
  },[props.arrBoard], move)


const inc=()=>{
    
    setMove(move+1)
    
  }

return(
  <div className="board-container">
      <button onClick={inc}>asdas</button>
      <BorderNumbLeft/>
      
      <ChessBoard rowsCells={rowsCells} click={inc} />
      <BorderNumbDown/>
    </div>
)
}
export default Board
