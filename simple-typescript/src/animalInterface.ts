interface Animal{
    name:string;
    group:string|undefined;
    setGroup(group:string):void
}
class Cat implements Animal{
    name:string;
    group:string|undefined;
    constructor(name:string){
         this.name=name;
    }
    setGroup(group:string){
        this.group=group;
    }
}
class Dog implements Animal{
    name:string;
    group:string|undefined;

    constructor (name:string){
        this.name=name;
    }
    setGroup(group:string){
        this.group=group
    }
}
interface AnimalConstructor{
    new (name:string):Animal // constructor signature
}

function initializeAnimal(Animal:AnimalConstructor,name:string) {
    const animal=new Animal(name);
    
}