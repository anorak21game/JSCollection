"use strict";

/* Objekt initialisieren */ console.log('\n' + "---------- Objekt initialisieren ----------" + '\n');

const object = {};

/* Literal*/

let colorSalon = {
    "number": 6,
    "lightness": 92,
    "saturation": 71,
    "name": "salmon"
}
console.log(colorSalon);

/* Kurzschreibweise / dot-Notation */

let colorTurquoise = {};
colorTurquoise.number = 174;
colorTurquoise.lightness = 72;
colorTurquoise.saturation = 56;
colorTurquoise.name = "colorTurquoise";

console.log(colorTurquoise);

/* Objekte mit new erzeugen */

const colorSteelblue = new Object();
colorSteelblue.number = 207;
colorSteelblue.lightness = 44;
colorSteelblue.saturation = 49;
colorSteelblue.name = "steelblue";

console.log(colorSteelblue);


console.log('\n' + "---------- Werte zuweisen und abrufen ----------" + '\n');

const kurs1 = {
    title: "Stricken und Häkeln",
    num: "P4722-15-08",
    description: "Einfache Strickmuster",
    places: 18,
    register: function () {
        console.log("kurs1bezeichnung " + this.title); // this bezieht sich auf Eigenschaften innerhalb des Objektes
    },
    show: function () {
        console.log("Freie Plätze " + this.places);
    } // kein Komma hinter dem letzten Wert/Objekt
}

kurs1.places = 20;              // Der Eigenschaft places einen neuen Wert zuweisen
kurs1.register();               // kurs1bezeichnung ausgeben
kurs1.show();                   // Anzahl der freien Plätze anzeigen
console.log(kurs1.title);       // Eigenschaften abrufen mit Punkt-Notation
console.log(kurs1["title"]);    // Eigenschaften abrufen mit Klammer-Notation


console.log('\n' + "---------- Objekt-Referenzen ----------" + '\n');

let kurs2 = {};
kurs2 = kurs1;
console.log(kurs2);


console.log('\n' + "---------- Object.keys()-Methode ----------" + '\n');

let kurs2property1 = Object.keys(kurs2);

console.log(kurs2property1);


console.log('\n' + "---------- Object.getOwnPropertyNames() ----------" + '\n');

let kurs2property2 = Object.getOwnPropertyNames(kurs2);

console.log(kurs2property2);


console.log('\n' + "---------- noch nicht fertig ! ----------" + '\n');

// noch nicht fertig !
const clothes = [
    { "name": "Mantel", "size": [44, 42, 40, 38], "price": 69 },
    { "name": "Jeans", "size": [44, 42,], "price": 59 },
    { "name": "Pullover", "size": [42, 40, 38], "price": 29 },
    { "name": "Jacke", "size": [44, 42, 40], "price": 28 }
];

for (let key in clothes) {
    if (clothes.hasOwnProperty(key)) {
        console.log("key " + key);
        console.log(clothes[key]);
    }
}

// noch nicht fertig !
let auto = {
    "marke": "Audi",
    "farbe": "rot",
    "baujahr": 2007,
    "tüv": true
}

var pruefstelle = 'tüv';
if (auto[pruefstelle])
   console.log('Das Auto von ' + auto.marke + ' ist noch für den Straßenverkehr zugelassen.');

var i,
    eigenschaften = [ 'marke', 'farbe', 'baujahr' ];

for (i=0; i<eigenschaften.length; i++) {
   console.log('Die Eigenschaft ' + eigenschaften[i] + ' hat den Wert ' + auto[eigenschaften[i]]);
}

// Terminal$> .../npm run test
// quit npm Strg^C