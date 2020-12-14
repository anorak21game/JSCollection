// @flow

// VARIABLES
let name: string = 'Rick Sanchez';
let age: number = 'Two';
let something: any = [1,2,3];
let users: string[] = []
let ids: number[] = [1,2,"Morty"];
let hasKids: Boolean;

// INTERFACE
let person: Person;

person = {
  name: 'Morty',
  age: 16,
  hasKids: true
}

interface Person {
  name: string;
  age: number;
  hasKids?: boolean;
}

// FUNCTIONS

function greeting(name: string): string{
  return 'Hello ' + name;
}

console.log(greeting(1));

function someFunction(value: string | number){
  return 'Hello';
}

someFunction(true);

// UTILITY TYPES

type Characters = "Mr. Meeseeks" | "Squanchy" | "Doofus Rick";

const charakters: Characters = "Doofus Rick";
const family: Charakters = "Jerry";

// Terminal$>flow