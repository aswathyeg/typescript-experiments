import React from 'react';
import StudentCSS from './student.module.css';
import {useSetState} from './AppState';

interface Student{
id:number,
name:string,
phone:number
}
interface Props{
  student : Student;
}
const Student:React.FC<Props>=({student})=>{
  const setState = useSetState();
  const onClickAdd = ()=>{
  }
    
    return (
    <div>
      <li className={StudentCSS.container}>
        <h2>{student.name}</h2>
        <p>{student.id}</p>
        <p>{student.phone}</p>
        <button type="button" onClick={onClickAdd}>Add</button>
        
        </li></div>
    )

    }
export default Student;