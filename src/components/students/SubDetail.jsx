import React from 'react'

export const SubDetail = (props) => {
    console.log("student sub detail....",props)
  return (
    <div>
        <h1>Sub detail</h1>
        {props.props.title}
    </div>
  )
}
