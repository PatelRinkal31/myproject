import { useState } from "react"

function UseStateTest1(){
    const[count,setCount] = useState(0);
    return(
        <div>
            <h1>Run useState count Values is : {count}</h1>
            <button onClick={()=>{setCount(count+10)}}>Increment</button><br/><br/>
            <button onClick={()=>{setCount(count-10)}}>Decrement</button><br/><br/>
            <button onClick={()=>{setCount(0)}}>Reset</button>
        </div>
    )
}
export default UseStateTest1;