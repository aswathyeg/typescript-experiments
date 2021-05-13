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
   setState((state)=>{
    const itemExists = state.group.students.find((student) => student.id === student.id);
     return{
       ...state,
       group:{...state.group,students:
      [...state.group.students,{id:student.id,name:student.name}]}};//all the state properties that dont want to update
   });
  };
    return (
    <div>
      <li className={StudentCSS.container}>
        <h2>{student.name}</h2>
        <p>{student.id}</p>
        <p>{student.phone}</p>
        <button type="button" onClick={onClickAdd}>Add</button>
        
        </li></div>
    )

};
export default Student;