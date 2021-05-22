import React from 'react';
function withAdd(ChildComponent:React.ComponentType){
const AddHOC=()=>{
return <ChildComponent />
}
return AddHOC;
}