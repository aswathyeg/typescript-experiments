import React from 'react';
import GroupCSS from './Group.module.css';
interface Props{

}
interface State{//decides show or hide cart
    isOpen:boolean;
}

class Group extends React.Component<Props, State>{

    constructor(props:Props){
super(props);
this.state={ //initialising state
    isOpen:false,
};

    }
    
    render(){
        return(
        
        <div className={GroupCSS.groupContainer}>
<button className={GroupCSS.button}
 type="button"
 onClick={()=>{
 this.setState((prevState)=>({ isOpen: !prevState.isOpen}));
}} 
>2 student(s)</button>
<div
 className={GroupCSS.groupDropDown} 
 style={{
 display:this.state.isOpen ? 'block':'none',
}}
>
    

<ul>
    <li>Adam</li>
    <li>Neena</li>
</ul>
    
</div>
        </div>);
    }
}
export default Group;