import React, { useState } from 'react'

export const FormDemo1 = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [color, setcolor] = useState("")

    const nameHandler = (event) => {
        //console.log(event);
        console.log(event.target.value);
        setname(event.target.value)
    }
    const submitHandler = () => {
        alert(`Name is ${name} and Email is ${email}`)
    }
  return (
    <div>
        <h1>FORM DEMO 1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' onChange={(event)=>{setemail(event.target.value)}}></input>
            {/* {email} */}
        </div>
        <div>
            <label>COLOR</label>
            <input type='color' onChange={(event)=>setcolor(event.target.value)}></input>
            {color}
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>SUBMIT</button>
        </div>
    </div>
  )
}
