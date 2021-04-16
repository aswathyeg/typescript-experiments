class Robot{
     name:string;
     constructor (name:string){
         this.name=name;
     }
     askMe(){
         console.log(`my name is ${this.name}`);

     }
      move(distance:number) {
         
     }
}
const robot=new Robot('John');
robot.askMe();