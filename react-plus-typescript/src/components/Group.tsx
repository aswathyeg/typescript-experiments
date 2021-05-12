import React from 'react';
import GroupCSS from './Group.module.css';
import { AppStateContext } from './AppState';
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
            <AppStateContext.Consumer>
            {(state) => {
         return (
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
                  {state.group.students.map((student) => {
                    return (
                      <li key={student.id}>
                        {student.name} &times; {student.name}
                      </li>
                    );
                  })}
                </ul>
    
</div>
        </div>
        );
    }}
         </AppStateContext.Consumer>
        );
    }
}
export default Group;