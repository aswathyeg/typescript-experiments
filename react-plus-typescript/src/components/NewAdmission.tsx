import React from 'react';
import student from './student';
import {Student} from '../types';

 interface Props{
     student:Student;
 }
const onClickAdd=()=>{

}

const NewAdmission:React.FC<Props>=({student})=>{
    return(
        <div>
             <h2>{student.name}</h2>
        <p>{student.id}</p>
        <p>{student.phone}</p>
        <button type="button" onClick={onClickAdd}>Add</button>
        
        </div>
    )

}
export default NewAdmission; 