interface IA {
    a: number;
}
interface IB {
    b: number;
}
interface IC {
    c: number;
}
function x(obj: IA & IB & IC) {
    return obj.a + obj.b + obj.c;

}
function combine<ObjA, ObjB>(objA: ObjA, objB: ObjB): ObjA & ObjB {//ObjA & ObjB are parameters to describe 
    //type of objects .return type to avoid logic error
    return { ...objA, ...objB }

}
const objA = { a: 1 }
const objB = { b: 2 }
const resultObj = combine(objA, objB);
console.log(resultObj);