// ES6 

//Scoping

const values = [1,2,3,4,5];

for (let i = 0; i < values.length; i++) {
    console.log(i);
}

// String

const firstName = "Michael";
const lastName = "Wirth";

console.log(`Hallo, Ich bin ${firstName} ${lastName}`);

// Objektdestrukturierung Bindung von Eigenschaftswerten an Variablen

const hero = {
    heroName: 'Batman',
    realName: 'Bruce Wayne',
    adress: {
        city: 'Gotham'
    }
};

const {realName: secretName} = hero;
const {adress: {city}} = hero
const {heroName, realName, enemies = ['Joker', 'Bane', 'Catwoman', 'Two-Face']} = hero;

const { ...fullHero } = hero
console.log(fullHero);

console.log(`Held: ${heroName}, Name: ${secretName}, Lebt in: ${city}, Feinde: ${enemies}`)


let eat;

const alien = {
    alienName: 'ET',
    eat: "Smarties",
};

let { alienName } = alien;
// alienName = 'Alf';
({eat} = alien);
// eat = 'Katzen';

console.log(`Alien: ${alienName}, Essen: ${eat}`);

const aliens = [
    {name: 'ET'},
    {name: 'Alf'},
    {name: 'Yoda'}
];

const alienNamen = aliens.map(
    function({name}) {
        return name;
    }
)

console.log(alienNamen);


// Arrow Function

// const erstKontakt = location => {
//     console.log(`${alienName} ist gelandet in ${location}`);
// };

const erstKontakt = location => console.log(`${alienName} ist gelandet in ${location}`);

erstKontakt('der Scheune');

// Terminal$>npm run test
// quit npm Strg^C