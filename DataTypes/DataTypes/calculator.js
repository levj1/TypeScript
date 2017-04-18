var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
// Number type
var days = 7;
var hours = 24;
var weeklyhours = days * hours;
function getNumberHoursInWeek() {
    return days * hours;
}
console.log(getNumberHoursInWeek());
// String type
var greeting = "Hello all!";
console.log(greeting);
// Boolean type
var isMale = true;
console.log(isMale);
// Array
var arrNames = [];
arrNames.push("ken");
arrNames.push("andy");
for (var i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i]);
}
var arrAges = [39, 12];
for (var i = 0; i < arrAges.length; i++) {
    console.log(arrAges[i]);
}
//# sourceMappingURL=calculator.js.map