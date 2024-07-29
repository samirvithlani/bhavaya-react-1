import React from 'react'
import { StudentDetail } from './StudentDetail'

export const Student = () => {
    var title = "student App"
    var student = {
        id:101,
        name:"kunal",
        age:23
    }
    var courses = [
        {
            id:1,
            name:"React"
        },
        {
            id:2,
            name:"Angular"
        }
    ]
  return (
    <div>
        <h1>Student</h1>
        <div style={{marginTop:"50px"}}>
            <StudentDetail title={title} stu={student} courses = {courses}></StudentDetail>
        </div>
    </div>
  )
}
