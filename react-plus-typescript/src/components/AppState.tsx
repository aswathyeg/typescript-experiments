import React,{createContext}from 'react';
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
const AppStateProvider:React.FC=({children})=>{//function component.to wrap component tree

    const [state,setState]= useState(defaultStateValue);//usestate hook(to store the value of context)
return (
    <AppStateContext.Provider value={state}>
    {children}
    </AppStateContext.Provider>
);

};
export default AppStateProvider;