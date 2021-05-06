import React from 'react'
import Student from './student';
import students from '../data/students.json';

const App=()=>{ //function component
    return (
    <ul>
       {students.map((student)=>{
           return<Student student={student}/>

       })
}

    </ul>)
}
export default App;