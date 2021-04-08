"use strict";

let person_1 = {
    vorname: "Heinrich",
    nachname: "Müller",
    address: {
        street: "Kirschbaumweg",
        streetnumber: 3,
        plz: 12345,
        city: "Dagobertshausen"
    }
};

let person_2 = {
    vorname: "Laura",
    nachname: "Becker",
    address: {
        street: "Nordstraße",
        streetnumber: 125,
        plz: 65789,
        city: "Entendorf"
    }
};

const personen_ausgeben = function(person) {
    console.log('${person.vorname} aus ${person.adress.city}');
}

personen_ausgeben(person_1);
personen_ausgeben(person_2);



// Terminal$> .../npm run test
// quit npm Strg^C