"use strict";
exports.__esModule = true;
var velocity_1 = require("./lib/velocity");
var calculateAcceleration_1 = require("./lib/calculateAcceleration");
var finalVelocity = new velocity_1.velocity();
console.log("The acceleration is " + calculateAcceleration_1.acceleration(finalVelocity));
