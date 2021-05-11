import React,{createContext}from 'react';

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
const AppStateProvider:React.FC=()=>{//fun component.to wrap component tree


}