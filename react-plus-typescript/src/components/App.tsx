import React from 'react'
import Student from './student';
import students from '../data/students.json';
import AppCSs from './App.module.css';

const App=()=>{ //function component
    return (
        <div>
    <ul>
       {students.map((student)=>{
           return<Student student={student}/>

       })
}

    </ul></div>)
}
export default App;