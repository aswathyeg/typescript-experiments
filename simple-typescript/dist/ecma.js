"use strict";
class Robots {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class AdvancedRobots extends Robots {
    constructor(name) {
        super(name);
        this.name = `Advanced ${name}`;
    }
    getAdvancedRobotName() {
        return this.name;
    }
}
const robots = new AdvancedRobots('Jack');
console.log('parent name', robots.getName());
console.log('child name', robots.getAdvancedRobotName());
