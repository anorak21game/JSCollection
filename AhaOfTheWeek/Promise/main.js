"use strict";

/* === TIMEOUT === */
console.log('\n' + '%cASYNC: %cTimeout', 'color: blue', 'color: green' , '\n');

/*
console.log('Start');

setTimeout(() => {
    console.log('Function');
}, 1000);

console.log('End');




/* === CALLBACK === */
console.log('\n' + '%cASYNC: %cCallback', 'color: blue', 'color: green' , '\n');






/* === PROMISE === */
console.log('\n' + '%cASYNC: %cPromise', 'color: blue', 'color: green' , '\n');

let p = new Promise ((resolve, reject) => {
    let a = 1 + 2
    if(a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// then if Success and catch if Failed
p.then((message) => {
    console.log('This is the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})


/* === PROMISE === */
console.log('\n' + '%cASYNC: %cPromise', 'color: blue', 'color: green' , '\n');

// const getHttpFake = (id) => {
//     const names = [
//         'Max',
//         'Steven',
//         'Tina'
//     ]
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(names[id]);
//         }, 2000);
//     })
// }

// Promise {<pending>}
// const logNames = () => {
//     const a = getHttpFake(2);
//     const b = getHttpFake(1);
//     console.log(a);
//     console.log(b);
// }

// logNames();

// nesting in 2x2sec
// const logNames = () => {
//     getHttpFake(2).then(
//         (val) => {
//             getHttpFake(1).then(
//                 (val2) => {
//                     console.log(val);
//                     console.log(val2);
//                 }
//             )
//         }
//     )
// }

// logNames();

// async/await in 2x2sec
// const call = async () => {
//     const a = await getHttpFake(2);
//     const b = await getHttpFake(1);
//     return [a, b];
// }

// call().then(console.log);

// async/await Promise all in 2sec
// const call = async () => {
//     const a = getHttpFake(2);
//     if (await getHttpFake(0) === 'Max') { // without await = 'Fail'
//         console.log('Max');
//     } else {
//         console.log('Fail');
//     }
//     const b = getHttpFake(1);
//     const r = await Promise.all([a, b]);
//     return r;
// }

// call().then(console.log);



// next part

/* End */
// Terminal$> .../npm run test
// quit npm Strg^C