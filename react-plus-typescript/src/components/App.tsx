import React from 'react'
import Student from './student';
import students from '../data/students.json';
import AppCSS from './App.module.css';
import Group from './Group';
//import StudentSVG from '../svg/student.svg';
import AppStateProvider from './AppState';

const App=()=>{ //function component
    return (
        <AppStateProvider>
        <div className={AppCSS.container}>
            <div className={AppCSS.header}>
<div className={AppCSS.siteTitle}>Students</div>
<Group />
            </div>
    <ul>
       {students.map((student)=>{
           return<Student student={student}/>

       })
}

    </ul></div>
    </AppStateProvider>
    )
}
export default App;