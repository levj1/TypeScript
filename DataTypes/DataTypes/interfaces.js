// 
var Fam = (function () {
    function Fam() {
    }
    return Fam;
}());
function printKidsAge(kidName) {
    console.log("Name: " + kidName.name + " is " + kidName.age + " year old.");
}
function printNameAndAge(arrFam) {
    for (var i_1 = 0; i_1 < arrFam.length; i_1++) {
        console.log(arrFam[i_1].name + " " + arrFam[i_1].age);
    }
}
function printLabel(labelledOjb) {
    console.log(labelledOjb.label);
}
var myObj = { size: 10, label: "Size 10 Objects" };
printLabel(myObj);
var leveille = { name: "kendall", age: 35 };
printKidsAge(leveille);
var familyNameAndAge = [
    { name: "ad", age: 1 },
    { name: "sfa", age: 51 },
];
printNameAndAge(familyNameAndAge);
var jeanPierre = [
    { name: "ken", age: 37 },
    { name: "dine", age: 33 },
    { name: "da", age: 28 }
];
printNameAndAge(jeanPierre);
//# sourceMappingURL=interfaces.js.map