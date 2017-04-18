var Enfant = (function () {
    function Enfant(fname, mname, lname, age) {
        this.firstName = fname;
        this.middleName = mname;
        this.lastName = lname;
        this.age = age;
    }
    return Enfant;
}());
var ClassRoom = (function () {
    function ClassRoom() {
    }
    return ClassRoom;
}());
var isDone = true;
var ChildPosition;
(function (ChildPosition) {
    ChildPosition[ChildPosition["In"] = 1] = "In";
    ChildPosition[ChildPosition["Out"] = 2] = "Out";
    ChildPosition[ChildPosition["NotHere"] = 3] = "NotHere";
})(ChildPosition || (ChildPosition = {}));
var Client = (function () {
    function Client() {
    }
    Client.prototype.CheckChildLocation = function (kid) {
        return ChildPosition.In;
    };
    Client.prototype.DropAChild = function (kid) {
    };
    Client.prototype.TakeOutAChild = function (kid) {
    };
    return Client;
}());
function printAllChild(arrOfKids) {
    for (var i = 0; i < arrOfKids.length; i++) {
        console.log("Name " + arrOfKids[i].firstName + " " + arrOfKids[i].middleName + " " + arrOfKids[i].lastName);
        console.log("Age: " + arrOfKids[i].age);
    }
}
var gshac = new Client();
var listOfKids = [
    new Enfant("chloe", "m", "leveille", 4),
    new Enfant("kila", "m", "peace", 4),
    new Enfant("joey", "m", "gallowey", 4)
];
printAllChild(listOfKids);
//# sourceMappingURL=app.js.map