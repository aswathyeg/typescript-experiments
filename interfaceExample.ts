interface Animal{
    name:string
}

//adding new field
interface Animal{
    honey:boolean
}

//extending an interface
interface Cow extends Animal{
milk:boolean
}
function jungle(animals:Cow){
    console.log("Animal name "+animals.name);
    console.log("Animal have honey? "+animals.honey);
    console.log("Animal have milk? "+animals.milk);
}
jungle({ name: "bear", honey:true,milk:false });