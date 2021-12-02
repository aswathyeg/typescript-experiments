"use strict";
// function x(obj: IA & IB & IC) {
//     return obj.a + obj.b + obj.c;
// }
function combine(objD, objB) {
    //type of objects .return type to avoid logic error
    return Object.assign(Object.assign({}, objD), objB);
}
const objA = { a: 1 };
const objB = { b: 2 };
const resultObj = combine(objA, objB);
console.log(resultObj);
