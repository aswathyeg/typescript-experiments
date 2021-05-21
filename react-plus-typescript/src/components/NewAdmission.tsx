import React from 'react';
import student from './student';
import {Student} from '../types';
import { useStateDispatch } from './AppState';
import NewAdmissionCSS from './NewAdmission.module.css';

 interface Props{
     student:Student;
 }


const NewAdmission:React.FC<Props>=({student})=>{
const dispatch=useStateDispatch();
const onClickAdd=()=>{
    dispatch({
        type:'Add_To_Group',
        
        payload:{
            item:{id:student.id,name:student.name,phone:student.phone},
        },
    });   

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
export default NewAdmission; 