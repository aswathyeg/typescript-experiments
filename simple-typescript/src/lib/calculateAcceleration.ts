 export default interface Icalculation{
     velocity():number;
 } 
  
   export function acceleration(calculation:Icalculation) {
      const time=0;
      let finalVelocity =calculation.velocity();
      const acceleration=finalVelocity/time;
    return acceleration;

}