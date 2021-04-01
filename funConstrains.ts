function longest<Type extends {length:number}>(a:Type,b:Type){
if(a.length>b.length){
return a;
}else{
return b;
}
}
const longerArray=longest([1,2],[1,2,3,4]);
const longerString=longest("aeriobics","aero");
console.log(longerArray);
console.log(longerString);