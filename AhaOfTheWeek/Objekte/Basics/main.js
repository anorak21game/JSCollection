"use strict";

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cOBJECT ONE: %cStructure', 'color: blue', 'color: green');
console.log("\n");

let objectOne = {
    myBool: true, // name: value,
    myInt: 5, 
    myString_1: 'object with ',
    myString_2: ' member',
    myArray: ['boolean', 'intenger', 'string', 'array', 'method'],
    myMethod() { // same with -> myMethod: function() {}
        console.log(this.myString_1, this.myInt, this.myString_2, this.myArray); // "this" always refers to the surrounding object  
    } // No Kommer on the last member
};

/* Call by Dot-Notation
object.myBool;
object.myInt;
object.myArray[0];
object.myString_1;
object.myString_2;
object.myMethod();
*/

if (objectOne.myBool) {
    objectOne.myMethod();
};

/* Call by Bracket-Notation
object["myBool"];
object["myInt"];
object["myArray[0]"]; // so not possible!
object["myString_1"];
object["myMethod()"];
*/

let propertie = "myArray";
let list = objectOne[propertie];
console.log(list); // Call by string

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cOBJECT TWO: %cValue/Reference', 'color: blue', 'color: green');
console.log("\n");

let animalValue = "Rabbit";

let objectTwo = {
    animalReference: "Fox"
};

let hunter = function(a, b) {
    a += " is dead";
    b.animalReference += " is dead";
};

hunter(animalValue, objectTwo);

console.log(animalValue); // Call by value
console.log(objectTwo.animalReference); // Call by reference

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cOBJECT THREE: %cProperties', 'color: blue', 'color: green');
console.log("\n");

let objectThree = {
    a: "",
    c: "important"
};

objectThree.a = "something"; // change
objectThree.b = "something"; // add
delete objectThree.c; // delete

console.log(objectThree);

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cOBJECT FOUR: %cNesting', 'color: blue', 'color: green');
console.log("\n");

let objectFour = {
    a: {
        b: "Object -> object",
        c: {
            d: "Object -> object -> object"
        }
    }
};

console.log(objectFour);

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cOBJECT FIVE: %cConstant', 'color: blue', 'color: green');
console.log("\n");

const objectFive = {
    a: "The properties can be changed, deleted and added.",
    b: "The values can be changed.",
    c: "But you can't overwrite it with another object",
    d: "For example: objectThree = objectTwo;"
};

console.log(objectFive);

// objectThree = objectTwo; // TypeError: Assignment to constant variable.

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cOBJECT SIX: %cReturn value', 'color: blue', 'color: green');
console.log("\n");

let objectSix = {
    a: "something",
    b: "something",
    c: "something"
}

let output = function(object) {
    return {
        d: object.a,
        e: object.b,
        f: object.c
    }
};

console.log(output(objectSix));

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cOBJECT SEVEN AND EIGHT: %cCompare', 'color: blue', 'color: green');
console.log("\n");

let objectSeven = {
    twin: true,
    eyes: "blue",
    hair: "blonde",
    weight: 60
};

let objectEight = {
    twin: true,
    eyes: "blue",
    hair: "blonde",
    weight: 60
};

if(objectSeven == objectEight) {
    console.log('objectSeven and objectEight is equal');
}; 

if(objectSeven == objectSeven) {
    console.log('objectSeven and objectSeven is equal');
}; 

// Terminal$> .../npm run test
// quit npm Strg^C