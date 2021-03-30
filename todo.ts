type Details={
    id:number,
    name:string,
    phone:number

}
function address(details:Details){
    console.log(details.id);
}
address({id:1,name:"s",phone:12});