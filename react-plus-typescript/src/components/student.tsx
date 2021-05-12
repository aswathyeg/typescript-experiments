import React, { useContext, useState } from 'react';
import StudentCSS from './student.module.css';
import {AppSetStateContext} from './AppState';

interface Student{
id:number,
name:string,
phone:number
}
interface Props{
  student : Student;
}
const Student:React.FC<Props>=({student})=>{
  const setState=useContext(AppSetStateContext);
  const onClickAdd=()=>{
    
  }
    return <div>
      <li className={StudentCSS.container}>
        <h2>{student.name}</h2>
        <p>{student.id}</p>
        <p>{student.phone}</p>
        <button type="button" onClick={onClickAdd}>Add</button>
        
        </li></div>

};
export default Student;