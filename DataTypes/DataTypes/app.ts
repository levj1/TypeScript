



let familyName: string[] = ["ken", "wood", "guy", "james", "nathy", "da", "rod", "ayou", "kelly", "andy"];

// Number
let decimal: number = 6;
let hex: number = 0xf00d;

console.log(decimal);
console.log(hex);

// Tuple
let x: [string, number];
x=["ken", 37];

console.log(x[0]);


enum Color { Red, Green, Blue };

let c: Color = Color.Red;
let colorName: string = Color[1];

console.log(c);
alert(colorName);