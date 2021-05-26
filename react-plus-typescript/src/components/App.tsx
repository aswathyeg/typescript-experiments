import React from 'react'
import Student from './student';
import students from '../data/students.json';
import AppCSS from './App.module.css';
import Group from './Group';
//import StudentSVG from '../svg/student.svg';
import AppStateProvider from './AppState';
import LogoSVG from '../svg/ocal-logo-purple.svg';
import NewAdmission from './NewAdmission';

const App = () => { //function component

    const newAdmissionStudent = students.find((student) => student.newAdmission);
    return (
        <AppStateProvider>
            <div className={AppCSS.container}>
                <div className={AppCSS.header}>
                    <LogoSVG width={120} height={120} />


                    <div className={AppCSS.siteTitle}>Students</div>
                    <Group />
                </div>

                {newAdmissionStudent && <NewAdmission student={newAdmissionStudent} />}
                <ul className={AppCSS.studentList}>
                    {students.map((student) => {
                        return <Student key={student.id} student={student} />;

                    })
                    }

                </ul>
            </div>
        </AppStateProvider>
    )
}
export default App;