import React from 'react';
interface Starship{
    name:string;
    enableJump:boolean;
    idNumber:number;
}
const updateStarship=(id:number,starship:Partial<Starship>)=>{
    //partial makes to call only required properties of function

}
updateStarship(1,{
    name:'ShipAnna'});

    type pickingProps=Pick<Starship,'name'>;//Pick eg

    type AvailableDrinks="Tea"|"cofee"|"lemonade"|"orange juice";
    let johnDrinks:AvailableDrinks;
    johnDrinks="Tea";
    
    type DrinksJaneLikes= "cofee"|"lemonade"|"orange juice";
    let janeDrinks:Exclude<AvailableDrinks,DrinksJaneLikes>//Exclude eg
    janeDrinks="Tea";

    

