interface IA{
    a:number;
}
interface IB{
    b:number;
}
interface IC{
    c:number;
}
function x(obj:IA & IB & IC){
return obj.a +obj.b + obj.c;

}