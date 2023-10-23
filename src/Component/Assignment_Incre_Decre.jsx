import { useState } from 'react';
import './Assignment1.css'
function Assignment_Incre_Decre(){
    const [count,setCount] =useState(0);
    return(
        <div className="increment-decrement">
            <h1>Create Increment decrement state change by button click?</h1>
            <h2>React Web</h2>
            <h2>{count}</h2>
            <div className='incre-decre-btn'>
                <button onClick={()=>{setCount(count-1)}}>Decrement</button>
                <button onClick={()=>{setCount(count+1)}}>Increment</button>
            </div>
            <button  className='reset-btn' onClick={()=>{setCount(0)}}>Reset</button>
        </div>
    )
}
export default Assignment_Incre_Decre;