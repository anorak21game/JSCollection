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

let next_element_sibling = ul.firstElementChild.nextElementSibling;
let previous_element_sibling = ul.lastElementChild.previousElementSibling;

console.log(next_element_sibling);
console.log(previous_element_sibling);

// parent element

let parent_element = ul.parentElement;

console.log(parent_element);

// navigation

let anchor = ul.querySelectorAll("li > a");

console.log(anchor);

console.log("\n---------------------------------------------------------------");
console.log('%cDOM: %cappend child', 'color: blue', 'color: green');
console.log("\n");

let div = document.createElement("div");
div.setAttribute("id", "my_id");
div.setAttribute("class", "my_class");

// append child

let text = document.createTextNode("APPEND CHILD TEST");
div.appendChild(text);

let jumbo_section = document.querySelector(".jumbotron > section");
jumbo_section.appendChild(div);

let nav_li = document.querySelector("#navigation > ul > li");
console.log(nav_li);

let nav_ul = document.querySelector("#navigation > ul");
console.log(nav_ul);

nav_ul.appendChild(nav_li);

console.log("\n---------------------------------------------------------------");
console.log('%cDOM: %cinnerHTML', 'color: blue', 'color: green');
console.log("\n");

let jumbo_html = document.querySelector(".jumbotron");

console.log(jumbo_html.innerHTML); // HTML
console.log(jumbo_html.innerText); // render Text
console.log(jumbo_html.textContent); // string Text

let string_1 = "";
let string_2 = "<header><h2>HELLO</h2></header>";
let string_3 = "<p>WORLD</p>";
let string_4 = "Lorem ipsum doloar sit amet.";

jumbo_html.innerHTML = string_2;

console.log("\n---------------------------------------------------------------");
console.log('%cDOM: %cinsertAdjacent', 'color: blue', 'color: green');
console.log("\n");

let li_el = document.createElement("li");
li_el.setAttribute("id", "mein-listenelement");

let a_el = document.createElement("a");
a_el.setAttribute("id", "mein-ankerelement");
a_el.setAttribute("href", "#");

let text_node = document.createTextNode("Element");

a_el.appendChild(text_node);
li_el.appendChild(a_el);

let liste = document.querySelector("#navigation > ul");

// liste.insertAdjacentElement("beforebegin", li);
// liste.insertAdjacentElement("afterbegin", li);
// liste.insertAdjacentElement("beforeend", li);
// liste.insertAdjacentElement("afterend", li);

let dom_string = "<li id=\"mein-listenelement\"><a id=\"mein-ankerelement\" href=\"#\">Element</a></li>";

// liste.insertAdjacentHTML("beforebegin", dom_string);
// liste.insertAdjacentHTML("afterbegin", dom_string);
// liste.insertAdjacentHTML("beforeend", dom_string);
// liste.insertAdjacentHTML("afterend", dom_string);

let text_list = "Lorem ipsum dolor sit amet.";

// liste.insertAdjacentText("beforebegin", text);
// liste.insertAdjacentText("afterbegin", text);
// liste.insertAdjacentText("beforeend", text);
liste.insertAdjacentText("afterend", text_list);




// Terminal$> .../npm run test
// quit npm Strg^C