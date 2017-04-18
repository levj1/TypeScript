class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}


// Number type
var days: number = 7;
var hours: number = 24;

var weeklyhours = days * hours;

function getNumberHoursInWeek() {
    return days * hours;
}
console.log(getNumberHoursInWeek());

// String type
var greeting: string = "Hello all!";
console.log(greeting);

// Boolean type
var isMale: Boolean = true;
console.log(isMale);


// Array
var arrNames: string[] = [];
arrNames.push("ken");
arrNames.push("andy");

for (var i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i]);
}

var arrAges: Array<number> = [39, 12];
for (var i = 0; i < arrAges.length; i++) {
    console.log(arrAges[i]);
}


