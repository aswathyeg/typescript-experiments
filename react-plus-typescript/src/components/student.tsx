import React from 'react';
import StudentCSS from './student.module.css';
import {useStateDispatch} from './AppState';
import {Student} from '../types';


interface Props{
  student : Student;
}
const Student:React.FC<Props>=({student})=>{
  const dispatch = useStateDispatch();
  const onClickAdd = ()=>{
    dispatch({
      type: 'Add_To_Group',
      payload: {
        item: { id: student.id, name: student.name ,phone:student.phone},
      },
    });
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