function printId1(id:number|string){
    if(typeof id=="number"){
        console.log(id+"is number type")
    }
    else{
        console.log(id+" is string")
    }
}
printId(1);