import React from 'react'
import Student from './student';
import students from '../data/students.json';
import AppCSS from './App.module.css';

const App=()=>{ //function component
    return (
        <div className={AppCSS.container}>
    <ul>
       {students.map((student)=>{
           return<Student student={student}/>

       })
}

    </ul></div>)
}
export default App;