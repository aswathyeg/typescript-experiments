class Robot{
  
     name:string;
     constructor (name:string){
         this.name=name;
     }
     askMe(){
         console.log(`my name is ${this.name}`);

     }
      move(distance:number) {
          console.log(`${this.name} moved ${distance} meters`)
         
     }
     
}

class FlyingRobot extends Robot{
    jetPacksize:number;
    constructor(name:string,jetPacksize:number){
        super(name);
        this.jetPacksize=jetPacksize;
       
    }
    move(distance:number){
        console.log(`${this.name} is flying`);
        super.move(distance);

    }
}
const robot=new Robot('John');
robot.askMe();

const flyingrbot=new FlyingRobot('Jim',2)
flyingrbot.move(10);