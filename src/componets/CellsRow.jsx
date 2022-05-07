import React from 'react'
import CellBoard from './CellBoard'

const CellsRow = (props)=>{
    

    return(
        <div className='cells-row' >
            
          {props.cells.map((cell,indexColumn)=>
            <CellBoard cell={cell} IndexRow={props.index} indexColumn={indexColumn} key={Math.random()+props.index}/>
          )}
        
      </div>
    )
}
export default CellsRow