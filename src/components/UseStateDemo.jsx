import React, { useState } from 'react'

export const UseStateDemo = () => {
    //var count =0;
    const [count,setCount] = useState(0);
    //useState will rreturn an array with two elements
    //count = variable to store the value
    //setCount = function to update the value
    //0 = initial value
    //const [flag, setflag] = useState(false) {},[],""
    const increseCount = ()=>{
    //    count++;
        setCount(count+1); 
        console.log(count);
       
    }
  return (
    <div>
        <h1 style={{color:"red"}}>use state demo</h1>
        <h2>{count}</h2>
        <button onClick={increseCount}>Increase</button>
    </div>
  )
}
