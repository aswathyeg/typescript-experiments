var Robot = /** @class */ (function () {
    function Robot(name) {
        this.name = name;
    }
    Robot.prototype.askMe = function () {
        console.log("my name is " + this.name);
    };
    Robot.prototype.move = function (distance) {
    };
    return Robot;
}());
var robot = new Robot('John');
robot.askMe();
