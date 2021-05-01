"use strict";
exports.__esModule = true;
var updateStarship = function (id, starship) {
    //partial makes to call only required properties of function
};
updateStarship(1, {
    name: 'ShipAnna'
});
var johnDrinks;
johnDrinks = "Tea";
var janeDrinks; //Exclude eg
janeDrinks = "Tea";
function paintShip(id, color) {
}
paintShip(1, "green");
var myObject = {
    sayHello: function () {
        return this.sayHellowThis();
    }
};
myObject.sayHello = myObject.sayHello.bind({
    sayHellowThis: function () {
        return "hello";
    }
});
console.log(myObject.sayHello);
