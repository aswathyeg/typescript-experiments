import React,{createContext, useContext}from 'react';
import { useState } from 'react';

interface AppStateValue{
group:{
    students:{id:number,name:string}[];
    
};
}
const defaultStateValue : AppStateValue={
    group:{
        students:[],
    }
}


export const AppStateContext=createContext(defaultStateValue);

export const AppSetStateContext=createContext<React.Dispatch<React.SetStateAction<AppStateValue>> |undefined>(undefined);//for setState

export const useSetState=()=>{//custom Hook
    const setState=useContext(AppStateContext);
    if(!setState){
        throw new Error('UseSetState was called outside AppStateContextProvider')
    }
    return setState;
}

const AppStateProvider:React.FC=({children})=>{//function component.to wrap component tree

    const [state,setState]= useState(defaultStateValue);//usestate hook(to store the value of context)
    
return (
    <AppStateContext.Provider value={state}>
        <AppSetStateContext.Provider value={setState}>{children}</AppSetStateContext.Provider>
    
    </AppStateContext.Provider>
);

};
export default AppStateProvider;