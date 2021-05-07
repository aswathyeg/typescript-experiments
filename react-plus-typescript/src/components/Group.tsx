import React from 'react';
import GroupCSS from './Group.module.css';
interface Props{

}
interface State{//decides show or hide cart
    isOpen:boolean;
}

class Group extends React.Component{

    constructor(props:Props){
super(props);
this.state={
    isOpen:false
};

    }
    
    render(){
        return(
        
        <div className={GroupCSS.groupContainer}>
<button className={GroupCSS.button} type="button" >2 student(s)</button>
<div className={GroupCSS.groupDropdown}>
<ul>
    <li>Adam</li>
    <li>Neena</li>
</ul>
    
</div>
        </div>);
    }
}
export default Group;