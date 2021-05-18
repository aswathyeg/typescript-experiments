import React,{createContext, useContext, useEffect}from 'react';
import { useReducer } from 'react';

interface StudentDetails {
    id: number;
    name: string;
    phone:number;
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

export const AppDispatchContext = createContext<
React.Dispatch<AddTogroupAction> | undefined
>(undefined);
//for setState
interface Action<T>{
    type:T;

}
interface AddTogroupAction extends Action<'Add_To_Group'>{
payload:{
item:Omit<StudentDetails,'quantity'>
};

}

interface InitializeGroupAction extends Action<'INITIOLIZE_GROUP'>{ 

  payload:{
    group:AppStateValue['group']
  }
}


const reducer=(state:AppStateValue,action:AddTogroupAction) =>{

    if (action.type==='Add_To_Group'){

      const itemToAdd = action.payload.item;
    const itemExists = state.group.students.find(
      (item) => item.id === itemToAdd.id
    );
    return {
      ...state,
      group: {
        ...state.group,
        students: itemExists
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

export const useStateDispatch=()=>{//custom Hook
    const dispatch=useContext( AppDispatchContext);
    if(!dispatch){
        throw new Error('useStateDispatch was called outside  AppDispatchContextProvider');
    }
    return dispatch;
}

const AppStateProvider:React.FC=({children})=>{//function component.to wrap component tree

    //const [state,setState]= useState(defaultStateValue);//usestate hook(to store the value of context)
    const [state,dispatch]= useReducer(reducer,defaultStateValue);

    useEffect(()=>{
      window.localStorage.setItem('group',JSON.stringify(state.group));

    },[state.group]
    );//functionality for saving the group


    useEffect(()=>{
      window.localStorage.getItem('cart')
    });

//functionality for load the group from localstorage


return (
    <AppStateContext.Provider value={state}>
        < AppDispatchContext.Provider value={dispatch}>{children}
        
        </ AppDispatchContext.Provider>
    
    </AppStateContext.Provider>
);

};
export default AppStateProvider;