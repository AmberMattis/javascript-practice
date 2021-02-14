//Objects are variables or properties that can contain multiple values.
var person = {
    firstName: "Jane",
    lastName: "Doe"
}

console.log(person.lastName);


//There are 2 ways to access object properties
//1//
// objectName.propertyName;
//2//
// objectName["propertyNamy\e"];





//Example of methods inside of objects
var personTwo = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(personTwo.fullName());