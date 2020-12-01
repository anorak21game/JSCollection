const sayName = () => {
    console.log('Michael Wirth');
};

const sayAdress = () => {
    console.log('Schlossstraße 7');
};

const sayCity = () => {
    console.log('34590 Wabern');
};

module.exports.sayName = sayName;
module.exports.sayAdress = sayAdress;
module.exports.sayCity = sayCity;