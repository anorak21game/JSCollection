"use strict";

/* === NEXT SECTION === */
console.log('\n' + '%cEVENTS: %cMouse-Events', 'color: blue', 'color: green' , '\n');

/*
let article = document.querySelector(".article");

article.addEventListener("click", e => {
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    // console.log(e.target.remove());
});

article.addEventListener("dblclick", e => {
    console.log("DBLCLICK: ");
    console.log(e);
});

article.addEventListener("mousedown", e => {
    console.log("MOUSEDOWN: ");
    console.log(e);
});

article.addEventListener("mouseup", e => {
    console.log("MOUSEUP: ");
    console.log(e);
});

article.addEventListener("mouseover", e => {
    console.log("MOUSEOVER: ");
    console.log(e);
});

/* === NEXT SECTION === */
console.log('\n' + '%cEVENTS: %cCapturing and Bubbeling', 'color: blue', 'color: green' , '\n');

/*
// capturing phase: Document <html> <body> <ul> <li> <a> 
// target phase: <a>
// bubbeling phase: <a> <li> <ul> <body> <html> Document

let el_1 = document.querySelector("#navigation > ul > li:nth-of-type(1) > a");
let el_1_parent = el_1.parentElement;
let el_2 = document.querySelector("#navigation > ul > li:nth-of-type(2) > a");
let el_2_parent = el_2.parentElement;

el_1.addEventListener("click", e => {
    e.preventDefault();
    console.log("el_1 hat es mitbekommen!");
});

el_1_parent.addEventListener("click", e => {
    console.log("el_1_parent hat es mitbekommen!");
});

el_2.addEventListener("click", e => {
    e.stopPropagation();
    console.log("el_2 hat es mitbekommen!");
});

el_2_parent.addEventListener("click", e => {
    console.log("el_2_parent hat es mitbekommen!");
});

/* === NEXT SECTION === */
console.log('\n' + '%cEVENTS: %cTastatur-Events', 'color: blue', 'color: green' , '\n');

/*
// document.addEventListener("keydown", e => {
//     console.log(e);
//     if(e.key === "@") {
//         console.log("Das @-Zeichen wurde gedrückt");
//     }
// });

document.addEventListener("keyup", e => {
    console.log(e);
    if(e.key === "p") {
        console.log("Das p-Zeichen wurde gedrückt");
    }
});

document.addEventListener("keydpress", e => { // dont work shift, Fn and Capslock Key
    console.log(e);
    if(e.key === ":") {
        console.log("Das :-Zeichen wurde gedrückt");
    }
});

/* === NEXT SECTION === */
console.log('\n' + '%cEVENTS: %cFormular-Events', 'color: blue', 'color: green' , '\n');

let formular = document.querySelector("form");

formular.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e);
});

formular.addEventListener("reset", e => {
    console.log(e);
});

/* End */
// Terminal$> .../npm run test
// quit npm Strg^C