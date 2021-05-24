import React from 'react';
import { StudentDetails, useStateDispatch } from './AppState';
import student from './student';

export interface AddToGroupProps{
addToGroup:(item:Omit<StudentDetails,'quantity'>)=>void;

}

export function withAdd<OriginalProps extends AddToGroupProps >
(ChildComponent:React.ComponentType<OriginalProps>){

const AddHOC=(props:Omit<OriginalProps,keyof AddToGroupProps>)=>{
    const dispatch = useStateDispatch();

  const onClickAdd :AddToGroupProps['addToGroup']= (item)=>{
    dispatch({
      type: 'Add_To_Group',
      payload: {
        item,
      },
    });
};
return <ChildComponent {...props as OriginalProps} addToGroup={onClickAdd}/>
}
return AddHOC;
}