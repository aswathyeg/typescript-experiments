var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Robot = /** @class */ (function () {
    function Robot(name) {
        this.name = name;
    }
    Robot.prototype.askMe = function () {
        console.log("my name is " + this.name);
    };
    Robot.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + " meters");
    };
    return Robot;
}());
var FlyingRobot = /** @class */ (function (_super) {
    __extends(FlyingRobot, _super);
    function FlyingRobot(name, jetPacksize) {
        var _this = _super.call(this, name) || this;
        _this.jetPacksize = jetPacksize;
        return _this;
    }
    FlyingRobot.prototype.move = function (distance) {
        console.log(this.name + " is flying");
        _super.prototype.move.call(this, distance);
    };
    return FlyingRobot;
}(Robot));
var robot = new Robot('John');
robot.askMe();
var flyingrbot = new FlyingRobot('Jim', 2);
flyingrbot.move(10);
