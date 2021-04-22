var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function x(obj) {
    return obj.a + obj.b + obj.c;
}
function combine(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var objA = { a: 1 };
var objB = { b: 2 };
var resultObj = combine(objA, objB);
console.log(resultObj);
