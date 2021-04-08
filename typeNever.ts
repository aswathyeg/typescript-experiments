function fn1(x:number|string){
    if(typeof x==="number"){
console.log("number")
    }
    else if(typeof x==="string"){
        console.log("string")
}
else{
    console.log("any")
}
}
fn1(1);