import React from 'react';
function withAdd<OriginalProps>(ChildComponent:React.ComponentType<OriginalProps>){
const AddHOC=(props:OriginalProps)=>{
return <ChildComponent {...props} />
}
return AddHOC;
}