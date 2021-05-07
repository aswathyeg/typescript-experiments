import React from 'react'
import Student from './student';
import students from '../data/students.json';
import AppCSS from './App.module.css';
import Group from './Group';
//import StudentSVG from '../svg/student.svg';

const App=()=>{ //function component
    return (
        <div className={AppCSS.container}>
            <div className={AppCSS.header}>
<div className={AppCSS.setTitle}>Students</div>
<Group />
            </div>
    <ul>
       {students.map((student)=>{
           return<Student student={student}/>

       })
}

    </ul></div>)
}
export default App;