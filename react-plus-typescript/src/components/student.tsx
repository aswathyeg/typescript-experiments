import React from 'react';
import StudentCSS from './student.module.css';
import { Student } from '../types';
import { AddToGroupProps, withAdd } from './Add';


interface Props extends AddToGroupProps {
  student: Student;
}
const StudentItem: React.FC<Props> = ({ student, addToGroup }) => {

  const onClickAdd = () => {

    addToGroup({ id: student.id, name: student.name, phone: student.phone })

  }

  return (
    <div>
      <li className={StudentCSS.container}>
        <h2>{student.name}</h2>
        <p>{student.id}</p>
        <p>{student.phone}</p>
        <button type="button" onClick={onClickAdd}>Add</button>

      </li></div>
  )

}
export default withAdd(StudentItem);