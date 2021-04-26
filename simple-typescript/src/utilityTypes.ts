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

    interface PaintStarship{
        color:"red"|"blue"|"green"|"violet"
        }
        function paintShip(
            id:number,
            color:NonNullable<PaintStarship['color']>)//set nullchecks to true in tsconfig
            {

        }
        paintShip(1,"green");

        interface MyObject{
            sayHello():void;

        }
        interface MyObjectThis{
            sayHellowThis(): string;
            
        }
        const myObject:MyObject & ThisType<MyObjectThis>={//thistype eg
            sayHello(){
                return this.sayHellowThis();

                
            }
        }
        myObject.sayHello=myObject.sayHello.bind({
            sayHellowThis(){
               return "hello"
            }

        })
console.log( myObject.sayHello)



    

