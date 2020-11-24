/*
ASSIGNMENT:
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

TESTS:
Passed: Object.keys(bob).length should return 6.
Passed: bob instanceof Person should return true.
Passed: bob.firstName should return undefined.
Passed: bob.lastName should return undefined.
Passed: bob.getFirstName() should return "Bob".
Passed: bob.getLastName() should return "Ross".
Passed: bob.getFullName() should return "Bob Ross".
Passed: bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
Passed: bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
Passed: bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
Passed: bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
Passed: bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/
"use strict";

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
    }

    this.setFirstName = function(first) {
        fullName = first + fullName.slice(fullName.search(" "), fullName.length);
    }

    this.setLastName = function(last) {
        fullName = fullName.slice(0, fullName.search(" ") + 1) + last;
    }

    this.getFullName = function() {
        return fullName;
    };

    this.getFirstName = function() {
        return fullName.slice(0, fullName.search(" "));
    }

    this.getLastName = function() {
        return fullName.slice(fullName.search(" ") + 1, fullName.length);
    }

    return this.setFullName(fullName);
};

var bob = new Person('Bob Ross');
//console.log(Object.keys(bob))
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());
bob.setFullName("Haskell Curry")
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());