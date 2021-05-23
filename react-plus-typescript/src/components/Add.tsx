import React from 'react';
import { StudentDetails, useStateDispatch } from './AppState';
import student from './student';

export interface AddToGroupProps{
addToGroup:(item:StudentDetails)=>void;

}

export function withAdd<OriginalProps>
(ChildComponent:React.ComponentType<OriginalProps>){
const AddHOC=(props:OriginalProps)=>{
    const dispatch = useStateDispatch();
  const onClickAdd = (item:StudentDetails)=>{
    dispatch({
      type: 'Add_To_Group',
      payload: {
        item,
      },
    });
};
return <ChildComponent {...props} addToGroup={onClickAdd}/>
}
return AddHOC;
}