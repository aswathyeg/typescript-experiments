class Robots{
    name:string;
    constructor(name:string){
        
        this.name=name;
    }
    getName(){
        return this.name;
    }
}
class AdvancedRobots extends Robots{ 
   name:string;//not overwriting

    constructor(name:string){
super(name);
this.name=`Advanced ${name}`;
    }

    getAdvancedRobotName(){
        return this.name;
    }
    
    
}
const robots =new AdvancedRobots('Jack');
console.log('parent name',robots.getName());
console.log('child name',robots.getAdvancedRobotName());
