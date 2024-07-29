import React from 'react'
import { SubDetail } from './SubDetail'

export const StudentDetail = (props) => {
    console.log("student detail....",props)
  return (
    <div>
        <h1>Student Detail - title = {props.title}</h1>
        <h2>Student Name - {props.stu.name}</h2>
        <ul>
            {
                props.courses.map((c)=>{
                    return(<li>
                        {c.id} - {c.name}
                    </li>)
                })
            }
        </ul>
        <SubDetail props={props}/>
    </div>
  )
}
