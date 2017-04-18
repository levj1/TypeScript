class Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {

    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(theName: string) {
        super(theName);
    }

    move(distanceInMeters = 30) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

class ChurchMember {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    Doing() {
        console.log(this.name + " is serving");
    }
}

class Pastor extends ChurchMember {
    constructor(theName: string)
    {
        super(theName);
    }

    Doing() {
        console.log(this.name + " is preaching");
    }
}

let striky = new Animal("striky");
console.log(striky.move());

let cobra = new Snake("Cobra");
cobra.move();

let hihan: Animal = new Horse("Cheval la");
hihan.move(34);

let fadinel = new Pastor("Fadinel");
fadinel.Doing();

let james = new ChurchMember("James");
james.Doing();


