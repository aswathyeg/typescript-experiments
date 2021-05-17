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
//this.handleClick=this.handleClick.bind(this);

    }
    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      // if ((e.target as HTMLElement).nodeName === 'SPAN') {
      //   (e.target as HTMLSpanElement).;
      // }
     // console.log(e.target);
      this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };
    
    render(){
        return(
            <AppStateContext.Consumer>
            {(state) => {
               const itemsCount = state.group.students.reduce((sum, item) => {
                return sum + item.quantity;
              }, 0);
         return (
        <div className={GroupCSS.groupContainer}>
<button className={GroupCSS.button}
 type="button"
 onClick={this.handleClick}
  
>
<span>{itemsCount} student(s)</span>
  </button>
<div
 className={GroupCSS.groupDropDown} 
 style={{
 display:this.state.isOpen ? 'block':'none',
}}
>
    
<ul>
                  {state.group.students.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
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