
// 
class Fam {
    name: string;
    age: number;

}
function printKidsAge(kidName: { name: string, age: number }) {
    console.log("Name: " + kidName.name + " is " + kidName.age + " year old.");
}

function printNameAndAge(arrFam: Fam[]): void {
    for (let i = 0; i < arrFam.length; i++) {
        console.log(arrFam[i].name + " " + arrFam[i].age);
    }
}

function printLabel(labelledOjb: { label: string }) {
    console.log(labelledOjb.label);
}

let myObj = { size: 10, label: "Size 10 Objects" };
printLabel(myObj);

let leveille = { name: "kendall", age: 35 };
printKidsAge(leveille);

let familyNameAndAge = [
    { name: "ad", age: 1 },
    { name: "sfa", age: 51 },
];

printNameAndAge(familyNameAndAge);


let jeanPierre: Fam[] = [
    { name: "ken", age: 37 },
    { name: "dine", age: 33 },
    { name: "da", age: 28 }
];

printNameAndAge(jeanPierre);