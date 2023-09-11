var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LengthBetween2Points = /** @class */ (function () {
    function LengthBetween2Points(num1, num2) {
        this.numone = num1;
        this.numtwo = num2;
    }
    LengthBetween2Points.prototype.calculatelength = function () {
        return Math.sqrt(Math.pow(this.numone, 2) + Math.pow(this.numtwo, 2));
    };
    return LengthBetween2Points;
}());
//! Q3
var threeDpoint = /** @class */ (function (_super) {
    __extends(threeDpoint, _super);
    function threeDpoint(num1, num2, num3) {
        var _this = _super.call(this, num1, num2) || this;
        _this.numthree = num1;
        return _this;
    }
    threeDpoint.prototype.calculatelength = function () {
        return Math.sqrt(Math.pow(this.numone, 2) + Math.pow(this.numtwo, 2) + Math.pow(this.numthree, 2));
    };
    return threeDpoint;
}(LengthBetween2Points));
var obj = new LengthBetween2Points(5, 10);
console.log(obj.calculatelength());
var ob2 = new threeDpoint(5, 10, 5);
console.log(ob2.calculatelength());
