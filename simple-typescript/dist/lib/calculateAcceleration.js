"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function acceleration(calculation) {
    const time = 10;
    let finalVelocity = calculation.velocity();
    const acceleration = finalVelocity / time;
    return acceleration;
}
exports.acceleration = acceleration;
