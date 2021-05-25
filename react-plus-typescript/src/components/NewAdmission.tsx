import React from 'react';
import { Student } from '../types';
import NewAdmissionCSS from './NewAdmission.module.css';
import { WithAddProps } from './Add';

interface Props {

    student: Student;
}


const NewAdmission: React.FC<Props> = ({ student }) => {

    return (
        <div className={NewAdmissionCSS.container}>
            <p>New Admission</p>
            <h2>{student.name}</h2>
            <p>{student.id}</p>
            <p>{student.phone}</p>
            <WithAddProps>
                {({ addToGroup }) => {
                    return (
                        <button
                            type="button"
                            onClick={() =>
                                addToGroup({
                                    id: student.id,
                                    name: student.name,
                                    phone: student.phone,
                                })
                            }
                        >
                            Add
                        </button>
                    );
                }}
            </WithAddProps>

        </div>
    );

};
export default NewAdmission;