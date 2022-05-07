import React from 'react'
import CellsRow from "./CellsRow";

const ChessBoard = ({rowsCells})=>{
    return(
        <div className="chess-board">
        {rowsCells.map((cells, index)=>
          <CellsRow cells={cells} index={index} key={Math.random()+index}/> 
          
        )}
         </div>
    )
}
export default ChessBoard