// let - scope is visible only inside a block of code
// let will not let you redeclare a variable
function Add() {
    var numb1 = 15;
    function Substract() {
        var numb2 = 12;
        return numb1 - numb2;
    }
    var numb2 = 20;
    return numb1 + numb2;
}
console.log(Add());
//# sourceMappingURL=VariableDeclaration.js.map