var familyName = ["ken", "wood", "guy", "james", "nathy", "da", "rod", "ayou", "kelly", "andy"];
// Number
var decimal = 6;
var hex = 0xf00d;
console.log(decimal);
console.log(hex);
// Tuple
var x;
x = ["ken", 37];
console.log(x[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
var colorName = Color[1];
console.log(c);
alert(colorName);
//# sourceMappingURL=app.js.map