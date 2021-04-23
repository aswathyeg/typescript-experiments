import React from 'react';
interface Starship{
    name:string;
    enableJump:boolean;
}
const updateStarship=(id:number,starship:Partial<Starship>)=>{
    //partial makes to call only required properties of function

}
updateStarship(1,{
    name:'ShipAnna'});

