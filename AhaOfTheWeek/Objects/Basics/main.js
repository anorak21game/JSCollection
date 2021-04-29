"use strict";

/* === STRUCTURE === */
console.log('\n' + '%cOBJECT: %cStructure', 'color: blue', 'color: green', '\n');

/*
let object = {
    myBool: true, // name: value,
    myInt: 5, 
    myString_1: 'object with ',
    myString_2: ' member',
    myArray: ['boolean', 'intenger', 'string', 'array', 'method'],
    myMethod() { // same with -> myMethod: function() {}
        console.log(this.myString_1, this.myInt, this.myString_2, this.myArray); // "this" always refers to the surrounding object  
    } // No Kommer on the last member
};

// // Call by Dot-Notation
// object.myBool;
// object.myInt;
// object.myArray[0];
// object.myString_1;
// object.myString_2;
// object.myMethod();

if (object.myBool) {
    object.myMethod();
};

// Call by Bracket-Notation
// object["myBool"];
// object["myInt"];
// object["myString_1"];
// object["myMethod()"];

let propertie = "myArray";
let list = objectOne[propertie];
console.log(list); // Call by string

/* === VALUE/REFERENCE === */
console.log('\n' + '%cOBJECT: %cValue/Reference', 'color: blue', 'color: green', '\n');

/*
let animalValue = "Rabbit";

let object = {
    animalReference: "Fox"
};

let hunter = function(a, b) {
    a += " is dead";
    b.animalReference += " is dead";
};

hunter(animalValue, object);

console.log(animalValue); // Call by value
console.log(object.animalReference); // Call by reference

/* === PROPERTIE === */
console.log('\n' + '%cOBJECT: %cPropertie', 'color: blue', 'color: green', '\n');

/*
let object = {
    a: "",
    c: "important"
};

object.a = "something"; // change
object.b = "something"; // add
delete object.c; // delete

console.log(object);

/* === NESTING === */
console.log('\n' + '%cOBJECT: %cNesting', 'color: blue', 'color: green', '\n');

/*
let object = {
    a: {
        b: "Object -> object",
        c: {
            d: "Object -> object -> object"
        }
    }
};

console.log(object);

/* === CONSTANT === */
console.log('\n' + '%cOBJECT: %cConstant', 'color: blue', 'color: green', '\n');

/*
const object = {
    a: "The properties can be changed, deleted and added.",
    b: "The values can be changed.",
    c: "But you can't overwrite it with another object",
    d: "For example: objectThree = objectTwo;"
};

console.log(object);

// objectThree = objectTwo; // TypeError: Assignment to constant variable.

/* === RETURN VALUE === */
console.log('\n' + '%cOBJECT: %cReturn value', 'color: blue', 'color: green', '\n');

/*
let object = {
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

console.log(output(object));

/* === COMPARE === */
console.log('\n' + '%cOBJECT: %cCompare', 'color: blue', 'color: green', '\n');

/*
let objectOne = {
    twin: true,
    eyes: "blue",
    hair: "blonde",
    weight: 60
};

let objectTwo = {
    twin: true,
    eyes: "blue",
    hair: "blonde",
    weight: 60
};

if(objectOne == objectTwo) {
    console.log('objectSeven and objectEight is equal');
}; 

if(objectOne == objectOne) {
    console.log('objectSeven and objectSeven is equal');
}; 

*/ 

// Terminal$> .../npm run test
// quit npm Strg^C