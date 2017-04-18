function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName + " " + middleName + " " + " " + lastName;
    }
}

var user = new Student("James", "M ", "User");

document.body.innerHTML = greeter(user);