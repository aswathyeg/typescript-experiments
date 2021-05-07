import React from 'react';
import StudentCSS from './student.module.css';
interface Student{
id:number,
name:string,
phone:number
}
interface Props{
  student : Student;
}
const Student:React.FC<Props>=({student})=>{
    return <div>
      <li className={StudentCSS.container}>
        <h2>{student.name}</h2>
        <p>{student.id}</p>
        <p>{student.phone}</p>
        
        </li></div>

};
export default Student;