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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name, _name_1;
var Robots = /** @class */ (function () {
    function Robots(name) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    Robots.prototype.getName = function () {
        return __classPrivateFieldGet(this, _name);
    };
    return Robots;
}());
_name = new WeakMap();
var AdvancedRobots = /** @class */ (function (_super) {
    __extends(AdvancedRobots, _super);
    function AdvancedRobots(name) {
        var _this = _super.call(this, name) || this;
        _name_1.set(_this, void 0); //not overwriting
        __classPrivateFieldSet(_this, _name_1, "Advanced " + name);
        return _this;
    }
    AdvancedRobots.prototype.getAdvancedRobotName = function () {
        return __classPrivateFieldGet(this, _name_1);
    };
    return AdvancedRobots;
}(Robots));
_name_1 = new WeakMap();
var robots = new AdvancedRobots('Jack');
console.log('parent name', robots.getName());
console.log('child name', robots.getAdvancedRobotName());
