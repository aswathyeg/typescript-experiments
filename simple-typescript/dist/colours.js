"use strict";
class Colours {
    constructor(name) {
        this.name = name;
    }
    static isAvailable(color) {
        return Colours.availableColors.includes(color);
    }
    set color(color) {
        if (!Colours.isAvailable(color)) {
            throw new Error(`Color ${color}is not available`);
        }
        this._color = color;
    }
}
Colours.availableColors = ["red", "green"];
