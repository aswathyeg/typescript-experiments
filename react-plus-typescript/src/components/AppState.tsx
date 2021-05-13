import React,{createContext, useContext}from 'react';
import { useReducer } from 'react';
import { useState } from 'react';

interface StudentDetails {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }

interface AppStateValue{
group:{
    students:StudentDetails[];
    
};
}
const defaultStateValue : AppStateValue={
    group:{
        students:[],
    }
}


export const AppStateContext=createContext(defaultStateValue);

export const AppSetStateContext = createContext<
React.Dispatch<AddTogroupAction> | undefined
>(undefined);
//for setState
interface Action<T>{
    type:T;

}
interface AddTogroupAction extends Action<'Add_To_Group'>{
payload:{
item:StudentDetails;
}

}

const reduser=(state:AppStateValue,action:AddTogroupAction) =>{

    if (action.type==='Add_To_Group'){

      const itemToAdd = action.payload.item;
    const itemExists = state.group.students.find(
      (item) => item.id === itemToAdd.id
    );
    return {
      ...state,
      cart: {
        ...state.group,
        items: itemExists
          ? state.group.students.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [...state.group.students, { ...itemToAdd, quantity: 1 }],
      },
    };
  }

  return state;
};//set reduser

export const useSetState=()=>{//custom Hook
    const setState=useContext(AppStateContext);
    if(!setState){
        throw new Error('UseSetState was called outside AppStateContextProvider');
    }
    return setState;
}

const AppStateProvider:React.FC=({children})=>{//function component.to wrap component tree

    //const [state,setState]= useState(defaultStateValue);//usestate hook(to store the value of context)
    const [state,dispatch]= useReducer(reduser,defaultStateValue);
return (
    <AppStateContext.Provider value={state}>
        <AppSetStateContext.Provider value={dispatch}>{children}
        
        </AppSetStateContext.Provider>
    
    </AppStateContext.Provider>
);

};
export default AppStateProvider;