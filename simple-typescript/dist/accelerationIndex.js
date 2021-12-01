"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const velocity_1 = require("./lib/velocity");
const calculateAcceleration_1 = require("./lib/calculateAcceleration");
const finalVelocity = new velocity_1.velocity();
console.log(`The acceleration is ${calculateAcceleration_1.acceleration(finalVelocity)}`);
