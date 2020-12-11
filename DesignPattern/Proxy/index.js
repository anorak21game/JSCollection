// basic example
// const proxy = new Proxy({}, {
//     get: (object, property) => property in object ? object[property] : {}
// });

// console.log(proxy.something);

// target
console.log("");
console.log("Target:");

let real_person = {
    name: "Mr. Poopybutt",
    email: "",
};

let scientist = {
    name: "Rick"
}

console.log(real_person, scientist);

// empty fallback
console.log("");
console.log("Empty fallback:");

const emptyObjectFallback = target => new Proxy(target, {
    get: (object, property) => property in object ? object[property] : {}
});

real_person = emptyObjectFallback(real_person);
console.log(real_person.name, real_person.age);

// undefine property
console.log("");
console.log("Undefine property:");

const noUndefinedProps = target => new Proxy(target, {
    get(object, property) {
        if (property in object) {
            return object[property];
        } else {
            console.error(`${object.name} has no ${property}`);
        } 
    }
});

real_person = noUndefinedProps(real_person);
console.log(real_person.age);

// smart array
console.log("");
console.log("Smart arrays with support intervals:");

const smartArray = target => new Proxy(target, {
    get(object, property) {
        if (+property >= 0) {
            return Reflect.get(...arguments);
        } else {
            if (property.includes('-')) {
                const from = +property.split('-')[0];
                const to   = +property.split('-')[1] + 1;
                
                return object.slice(from, to);
            } else {
                return object[object.length + +property];
            }
        }
    }
});

const sweets = smartArray(['🍩', '🍰', '🍪']);
console.log("Mr. Poopybutt favorite sweets are ", sweets['1-2']);

// smart objects
console.log("");
console.log("Smart objects:");

let value = null;

// search function
const searchFor = (property, object) => {
    for (const key of Object.keys(object)) {
        if (typeof object[key] === 'object') {
            searchFor(property, object[key]);
        } else if (typeof object[property] !== 'undefined') {
            value = object[property];
            break;
        }
    }

    return value;
};

const smartObject = target => new Proxy(target, {
    get(object, property) {
        if (property in object) {
            return object[property]
        } else {
            return searchFor(property, object);
        }
    }
});

const rick_and_morty = smartObject({
    friend: {
        id: 1,
        best_friend: {
            friend_name: 'Mr. Poopybutt',
        }
    }
});

console.log(rick_and_morty.friend.best_friend.friend_name);
console.log(rick_and_morty.friend_name);

// setting values
console.log("");
console.log("Setting Values:");

const validatedUser = target => new Proxy(target, {
    set(object, property, value) {
        switch(property) {
            case 'email':
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regex.test(value)) {
                    console.log('The user must have a valid email');
                    return false;
                }
                break;
            case 'age':
                if (value < 18 || value > 65) {
                    console.log('A user\'s age must be between 18 and 65');
                    return false;
                }
                break;
        }

        return Reflect.set(...arguments);
    }
});

real_person = validatedUser(real_person);
real_person.email = "OooWee";
real_person.age = 0;

console.log(real_person.email);

// making properties read-only
console.log("");
console.log("Making properties read-only:");

// prevent function
const preventWrite = () => {
    console.error('The object you try to modify is read-only');
};

const readOnly = target => new Proxy(target, {
    set:            preventWrite,
    deleteProperty: preventWrite,
    defineProperty: preventWrite,
    setPropertyOf:  preventWrite
});

scientist = readOnly({
    name: "Rick"
});

scientist.name = "Morty";
delete scientist.name;

console.log(scientist.name);

// Converting strings to numbers
console.log("");
console.log("Converting strings to numbers:");

const parseStrings = target => new Proxy(target, {
    set(object, property, value) {
        if (/^\d+$/.test(value)) {
            value = +value;
        }
        
        return Reflect.set(...arguments);
    }
});

numbers = {one: null};
numbers = parseStrings(numbers);
numbers.one = "1";

console.log("Number one is a", typeof numbers.one);

// Terminal$> .../npm run test
// quit npm Strg^C