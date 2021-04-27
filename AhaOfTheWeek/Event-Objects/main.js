"use strict";

/* next section */
console.log("\n---------------------------------------------------------------");
console.log('%EVENTS: %cMouse-Events', 'color: blue', 'color: green');
console.log("\n");

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

/* next section */
console.log("\n---------------------------------------------------------------");
console.log('%EVENTS: %cCapturing and Bubbeling', 'color: blue', 'color: green');
console.log("\n");

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

// Terminal$> .../npm run test
// quit npm Strg^C