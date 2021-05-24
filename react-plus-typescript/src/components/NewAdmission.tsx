import React from 'react';
import {Student} from '../types';
import { useStateDispatch } from './AppState';
import NewAdmissionCSS from './NewAdmission.module.css';
import { withAdd,AddToGroupProps } from './Add';

export interface Props extends AddToGroupProps{
    
     student:Student;
 }


const NewAdmission:React.FC<Props>=({student,addToGroup})=>{

const onClickAdd=()=>{
    addToGroup({id:student.id,name:student.name,phone:student.phone})
   
};



    return(
        <div className={NewAdmissionCSS.container}>
            <p>New Admission</p>
             <h2>{student.name}</h2>
        <p>{student.id}</p>
        <p>{student.phone}</p>
        <button type="button" onClick={onClickAdd}>Add</button>
        
        </div>
    )

}
export default withAdd(NewAdmission); 