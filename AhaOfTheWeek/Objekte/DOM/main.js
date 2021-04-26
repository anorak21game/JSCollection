"use strict";

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cDOM: %cdocument', 'color: blue', 'color: green');
console.log("\n");

console.log(document);
console.log(document.head);
console.log(document.body);

console.log(document.location);
// console.log(document.location.href = "https://www.google.de");
console.log(document.URL); // read only

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cDOM: %cselect element', 'color: blue', 'color: green');
console.log("\n");

// getElement Methode

let nav = document.getElementById("navigation");
console.log(nav); 

let jumbo = document.getElementsByClassName("jumbotron");
console.log(jumbo); 
console.log(jumbo.length); 

let para = document.getElementsByTagName("p");
console.log(para);
console.log(para.length);

// querySelector Methode

let navlist = document.querySelector("body > #navigation > ul");
console.log(navlist);

let firstJumbo = document.querySelector(".jumbotron");
console.log(firstJumbo);

// let nodelist = document.querySelectorAll("body > #navigation > ul > li > a");
// console.log(nodelist);
// console.log(nodelist.length);

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cDOM: %cHTML-collection', 'color: blue', 'color: green');
console.log("\n");

// HTML-Collection support: for & for-of

let htmlCollection_1 = document.getElementsByClassName("jumbotron");
let htmlCollection_2 = document.getElementsByTagName("li");

console.log(htmlCollection_1);
console.log(htmlCollection_2);

//  for-loop

for (let i = 0; i < htmlCollection_1.length; i++) {
    console.log(htmlCollection_1[i]);
}

for (let i = 0; i < htmlCollection_2.length; i++) {
    console.log(htmlCollection_2[i]);
}

// for-of-loop

for (let e of htmlCollection_1) {
    console.log(e);
}

for (let e of htmlCollection_2) {
    console.log(e);
}

/* chapter */
console.log("\n---------------------------------------------------------------");
console.log('%cDOM: %cnodelist', 'color: blue', 'color: green');
console.log("\n");

// Nodelist support: for, for-of & for-each

let nodelist = document.querySelectorAll("p");

console.log(nodelist);

// for-loop

for (let i = 0; i < nodelist.length; i++) {
    console.log(nodelist[i]);
}

// for-of-loop

for (let e of nodelist) {
    console.log(e);
}

// for-each-loop

nodelist.forEach(function(e) {
    console.log(e);
});

console.log("\n---------------------------------------------------------------");
console.log('%cDOM: %cnavigation', 'color: blue', 'color: green');
console.log("\n");

let ul = document.querySelector("#navigation > ul");
console.log(ul);

// child nodes 

let child_nodes = ul.childNodes;
let first_child = ul.firstChild;
let last_child = ul.lastChild;

console.log(child_nodes);
console.log(first_child);
console.log(last_child);

// sibling node

let next_sibling = ul.nextSibling;
let previous_sibling = ul.previousSibling;

console.log(next_sibling);
console.log(previous_sibling);

// child element

let children = ul.children;
let first_elemnet_child = ul.firstElementChild;
let last_elemnet_child = ul.lastElementChild;

console.log(children);
console.log(first_elemnet_child);
console.log(last_elemnet_child);

// sibling element

let next_element_sibling = ul.nextElementSibling;
let previous_element_sibling = ul.previousElementSibling;

console.log(next_element_sibling);
console.log(previous_element_sibling);




// Terminal$> .../npm run test
// quit npm Strg^C