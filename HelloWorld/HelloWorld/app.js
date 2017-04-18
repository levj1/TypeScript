function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + " " + lastName;
    }
    return Student;
}());
var user = new Student("James", "M ", "User");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=app.js.map