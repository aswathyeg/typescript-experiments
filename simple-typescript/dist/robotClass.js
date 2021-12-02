"use strict";
class Robot {
    constructor(name) {
        this.name = name;
    }
    askMe() {
        console.log(`my name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class FlyingRobot extends Robot {
    constructor(name, jetPacksize) {
        super(name);
        this.jetPacksize = jetPacksize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot('John');
robot.askMe();
const flyingrbot = new FlyingRobot('Jim', 2);
flyingrbot.move(10);
