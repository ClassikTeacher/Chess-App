import React from 'react'
import imgBishop from '../../../img/bishop_w.png'
const Bishop_w = (props)=>{
    return(
        <div id={props.id} className='bishop'>
            <img src={imgBishop} alt='bishop_w'/>
            
        </div>
    )
}
export default Bishop_w