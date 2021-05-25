import React from 'react';
import { StudentDetails, useStateDispatch } from './AppState';

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
return (<ChildComponent
 {...(props as OriginalProps)}
  addToGroup={onClickAdd}
  />
  );
};
return AddHOC;
}

export const WithAddProps:React.FC<{
  children:(props:AddToGroupProps)=>JSX.Element;
}>=({children})=>{
  const dispatch = useStateDispatch();

  const addToGroup :AddToGroupProps['addToGroup']= (item)=>{
    dispatch({
      type: 'Add_To_Group',
      payload: {
        item,
      },
    });

};
return children({addToGroup});
};