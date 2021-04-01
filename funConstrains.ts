function longest<Type extends {length:number}>(a:Type,b:Type){
if(a.length>b.length){
return a;
}else{
return b;
}
}
const longerArray=longest([1,2],[1,2,3,4]);
const longerString=longest("aeriobics","aero");
//const longerNumber=longest(50,12); this cause error bcz in(50,12) .length property is not applicable
console.log(longerArray);
console.log(longerString);