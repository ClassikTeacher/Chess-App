import React, { useState, useContext } from 'react'
import { figurePattern } from '../pattern/patternFigure'
import Bishop_b from './UI/bishop/Bishop_b'
import Bishop_w from './UI/bishop/Bishop_w'
import Pawn_b from './UI/pawn/Pawn_b'
import Pawn_w from './UI/pawn/Pawn_w.jsx'
import  step  from '../context/useStep'
import  {MovePlayer}  from '../context/index'
import { arrBoard } from '../board'
import { chamgeFigure } from '../context/changeFigure'

const CellBoard = (props)=>{
        const [active, setActive] = useState('')
        const {move, setMove} = useContext(MovePlayer)  
        const [figureItem, setFiguteItem] = useState()
        
        let idCell = props.cell.firstIndex
        let idCellN = `${props.IndexRow}${props.indexColumn}`
        let figure = props.cell.figure 
        
           
        
        const step2 = (e, indexRow, indexColumn)=>{
            
            
             let stepFigure = arrBoard[indexRow][indexColumn].figure
            
            // console.log(arrBoard[indexRow][indexCouln])
            // arrBoard[indexRow][indexCouln].figure =undefined
            // arrBoard[indexRow][indexCouln].free = true
            // console.log(arrBoard[indexRow][indexCouln])
            // arrBoard[indexRow+1][indexCouln].figure = stepFigure
            
            
            
            // console.log(stepFigure)
            
            step(stepFigure,indexRow,indexColumn)
            // console.log(e)
            // console.log(e.id)
            // console.log(e.firstElementChild)
            // console.log(indexCouln)
            // console.log(indexRow)
            // console.log(arrBoard[indexRow][indexCouln])
            // console.log(e.className)
            // setMove(move+1)
           
            
            
        }
        function step(stepFigure,indexRow,indexColumn){
            if(active ===''){
                setActive('_active')
            }else{setActive('')}
            
            console.log(arrBoard[indexRow][indexColumn].free)
            if (chamgeFigure.saveFigure !== stepFigure && !arrBoard[indexRow][indexColumn].free){
                
                console.log(chamgeFigure.saveFigure)
                chamgeFigure.saveFigure = stepFigure
                chamgeFigure.lastindexColumn = indexColumn
                chamgeFigure.lastIndexRow = indexRow
                console.log(chamgeFigure.saveFigure)
                
            } 
            else if(chamgeFigure.saveFigure && arrBoard[indexRow][indexColumn].free){
                console.log(figureItem)
                arrBoard[indexRow][indexColumn].figure = chamgeFigure.saveFigure
                arrBoard[indexRow][indexColumn].free = false
                arrBoard[chamgeFigure.lastIndexRow][chamgeFigure.lastindexColumn].figure = undefined
                arrBoard[chamgeFigure.lastIndexRow][chamgeFigure.lastindexColumn].free = true
                chamgeFigure.saveFigure = undefined

                setMove(move+1)

                console.log(move)
            }
        }




    if(props.cell.color == 'white'){
    return(
            
            <div id={idCell} className={"board-cell _white " + active}
            onClick={(e)=>step2(e.target, props.IndexRow,props.indexColumn)}
            >
                {console.log(1)}
                {figure}
                
            </div>
           
        
    )} else {
    return(
            
        <div id={idCell} className={"board-cell _black " + active}
        onClick={(e)=>step2(e.target, props.IndexRow,props.indexColumn)}
        >
             {figure}
        </div>
       
    
)}
    
}
export default CellBoard