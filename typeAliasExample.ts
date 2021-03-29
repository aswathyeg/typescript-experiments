type Animals1={
name:string
}

//cannot add new field

//extending type alise by intersection
type Cows1=Animals1 &
{
    milk:boolean
}

function jungles(animalss1:Cows1){
    console.log("Animal name "+animalss1.name);
    //console.log("Animal have honey? "+animalss1.honey);
    console.log("Animal have milk? "+animalss1.milk);
}
jungles({ name: "bear",milk:false });
