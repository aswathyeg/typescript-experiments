import React from 'react';

interface Student{
id:number,
name:string,
phone:number
}
interface Props{
  student : Student;
}
const Student:React.FC<Props>=({student})=>{
    return <div><li>
        <h2>{student.name}</h2>
        <p>{student.id}</p>
        <p>{student.phone}</p>
        
        </li></div>

};
export default Student;