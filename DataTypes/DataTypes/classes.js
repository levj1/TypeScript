var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(theName) {
        _super.call(this, theName);
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 30; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var ChurchMember = (function () {
    function ChurchMember(theName) {
        this.name = theName;
    }
    ChurchMember.prototype.Doing = function () {
        console.log(this.name + " is serving");
    };
    return ChurchMember;
}());
var Pastor = (function (_super) {
    __extends(Pastor, _super);
    function Pastor(theName) {
        _super.call(this, theName);
    }
    Pastor.prototype.Doing = function () {
        console.log(this.name + " is preaching");
    };
    return Pastor;
}(ChurchMember));
var striky = new Animal("striky");
console.log(striky.move());
var cobra = new Snake("Cobra");
cobra.move();
var hihan = new Horse("Cheval la");
hihan.move(34);
var fadinel = new Pastor("Fadinel");
fadinel.Doing();
var james = new ChurchMember("James");
james.Doing();
//# sourceMappingURL=classes.js.map