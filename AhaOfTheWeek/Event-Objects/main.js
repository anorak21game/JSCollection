"use strict";

/* === MOUSE EVENT === */
console.log('\n' + '%cEVENTS: %cMouse-Events', 'color: blue', 'color: green' , '\n');

/*
let article = document.querySelector(".article");

// click
article.addEventListener("click", e => {
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    // console.log(e.target.remove());
});

// double click
article.addEventListener("dblclick", e => {
    console.log("DBLCLICK: ");
    console.log(e);
});

// mouse down
article.addEventListener("mousedown", e => {
    console.log("MOUSEDOWN: ");
    console.log(e);
});

// mouse up
article.addEventListener("mouseup", e => {
    console.log("MOUSEUP: ");
    console.log(e);
});

// mouse over
article.addEventListener("mouseover", e => {
    console.log("MOUSEOVER: ");
    console.log(e);
});




/* === CAPTURING/BUBBELING === */
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




/* === TASTATUR EVENT === */
console.log('\n' + '%cEVENTS: %cTastatur-Events', 'color: blue', 'color: green' , '\n');

/*
// keydown
// document.addEventListener("keydown", e => {
//     console.log(e);
//     if(e.key === "@") {
//         console.log("Das @-Zeichen wurde gedrückt");
//     }
// });

// keyup
document.addEventListener("keyup", e => {
    console.log(e);
    if(e.key === "p") {
        console.log("Das p-Zeichen wurde gedrückt");
    }
});

// keypress
document.addEventListener("keydpress", e => { // dont work shift, Fn and Capslock Key
    console.log(e);
    if(e.key === ":") {
        console.log("Das :-Zeichen wurde gedrückt");
    }
});




/* === FORMULAR EVENT === */
console.log('\n' + '%cEVENTS: %cFormular-Events', 'color: blue', 'color: green' , '\n');

/*
let formular = document.querySelector("form");

// submit
formular.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e);
});

// reset
formular.addEventListener("reset", e => {
    console.log(e);
});



/* === CHANGE EVENT === */
console.log('\n' + '%cEVENTS: %cChange-Events', 'color: blue', 'color: green' , '\n');

/*
// get
let input = document.querySelector("input[type=text]");
let textarea = document.querySelector("textarea");
// input event: every change is triggered
input.addEventListener("input", e => console.log(e));
textarea.addEventListener("input", e => console.log(e));
// change event: only when you let go or leave the field
input.addEventListener("change", e => console.log(e));
textarea.addEventListener("change", e => console.log(e));

// checkbox
let checkboxen = document.querySelectorAll("input[type=checkbox]");
checkboxen.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e);
        console.log(e.target.checked);
    });
});

// radiobutton
let radiobuttons = document.querySelectorAll("input[type=radio]");
radiobuttons.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e);
        console.log(e.target.value);
    });
});

// range
let range = document.querySelectorAll("input[type=range]");
range.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e);
        console.log(e.target.value);
    });
});




/* === WINDOW EVENT === */
console.log('\n' + '%cEVENTS: %cWindow-Events', 'color: blue', 'color: green' , '\n');

/*
// resize
window.addEventListener("resize", e => console.log(e));

// scroll
window.addEventListener("scroll", e => {
    console.log(e);
    console.log(scrollX);
    console.log(scrollY);
});

// load
window.addEventListener("load", e => console.log(e));




/* === TRIGGER === */
console.log('\n' + '%cEVENTS: %cTrigger', 'color: blue', 'color: green' , '\n');

/*
// link
let link = document.querySelector("a.active");
// click
setTimeout(() => link.click(), 3000);

// input
let input = document.querySelector(".login input[type=text]");
// input focus
setTimeout(() => input.focus(), 6000);
// input blur
setTimeout(() => input.blur(), 9000);

// get form
let formular = document.querySelector("form");
// formular reset
setTimeout(() => formular.reset(), 12000);
// formular submit
// setTimeout(() => formular.submit(), 15000);


/* End */
// Terminal$> .../npm run test
// quit npm Strg^C