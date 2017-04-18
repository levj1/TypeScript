class Enfant {
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    classroom: ClassRoom;
    checkInDate: Date;
    checkOutDate: Date;

    constructor(fname: string, mname: string, lname: string, age: number) {
        this.firstName = fname;
        this.middleName = mname;
        this.lastName = lname;
        this.age = age;
    }
}

class ClassRoom {
    name: string;
    numberOfStudent: number;
}
let isDone: Boolean = true;

enum ChildPosition { In = 1, Out = 2, NotHere = 3 }

interface KidsManagement {
    allChild: Enfant[];
    CheckChildLocation(kid: Enfant): ChildPosition;
    DropAChild(kid: Enfant): void;
    TakeOutAChild(kid: Enfant): void;
}

class Client implements KidsManagement {
    allChild: Enfant[];
    CheckChildLocation(kid: Enfant): ChildPosition {
        return ChildPosition.In;
    }
    DropAChild(kid: Enfant): void {
    }

    TakeOutAChild(kid: Enfant): void {

    }
}

function printAllChild(arrOfKids: Enfant[]): void {
    for (let i = 0; i < arrOfKids.length; i++) {
        console.log("Name " + arrOfKids[i].firstName + " " + arrOfKids[i].middleName + " " + arrOfKids[i].lastName);
        console.log("Age: " + arrOfKids[i].age);
        //console.log("Classroom: " + arrOfKids[i].classroom.name);
        //console.log("Check in: " + arrOfKids[i].checkInDate);
        //console.log("Check Out: " + arrOfKids[i].checkOutDate);
    }
}

let gshac: Client = new Client();


let listOfKids: Enfant[] = [
    new Enfant("chloe", "m", "leveille", 4),
    new Enfant("kila", "m", "peace", 4),
    new Enfant("joey", "m", "gallowey", 4)
];


printAllChild(listOfKids);