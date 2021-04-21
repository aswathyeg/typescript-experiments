"use strict";
exports.__esModule = true;
function acceleration(calculation) {
    var time = 10;
    var finalVelocity = calculation.velocity();
    var acceleration = finalVelocity / time;
    return acceleration;
}
exports.acceleration = acceleration;
