function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
var longerArray = longest([1, 2], [1, 2, 3, 4]);
var longerString = longest("aeriobics", "aero");
console.log(longerArray);
console.log(longerString);
