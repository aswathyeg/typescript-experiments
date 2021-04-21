interface Dog{
    walk():void;
    bark():void;
}
interface Cat{
    walk():void;
    meaw():void
}
function  callMyPet(pet:Dog|Cat) {
    pet.walk();
if((<Dog>pet).bark){
    (<Dog>pet).bark();
}
else{
    (<Cat>pet).meaw();
}
   
    
}