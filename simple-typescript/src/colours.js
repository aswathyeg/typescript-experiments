var Colours = /** @class */ (function () {
    function Colours() {
    }
    Colours.isAvailable = function (color) {
        return Colours.availableColors.includes(color);
    };
    Object.defineProperty(Colours.prototype, "color", {
        set: function (color) {
            if (!Colours.isAvailable(color)) {
                throw new Error("Color " + color + "is not available");
            }
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Colours.availableColors = ["red", "green"];
    return Colours;
}());
