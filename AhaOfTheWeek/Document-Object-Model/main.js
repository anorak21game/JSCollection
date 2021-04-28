"use strict";

/* === WINDOW === */

console.log('\n' + '%cDOM: %cWindow', 'color: blue', 'color: green' , '\n');

// /*
console.log(window);
console.log("innerWidth: " + innerWidth);
console.log("innerHeight: " + innerHeight);
console.log("outerWidth: " + outerWidth);
console.log("outerHeight: " + outerHeight);
console.log("scrollX: " + scrollX);
console.log("ScrollY: " + scrollY);

console.log("%cLocal Storage: ", "color: green");
console.log(localStorage);
console.log("%cSession Storage: ", "color: green");
console.log(sessionStorage);

// alert("Warning");
// confirm("Are you sure?");
// let answer = prompt("write something");
// console.log(answer);
// print();
// open("https://www.google.de");
// close();




/* === DOCUMENT === */

console.log('\n' + '%cDOM: %cDocument', 'color: blue', 'color: green' , '\n');

/*
console.log(document);

// console.log(document.location.href = "https://www.google.de");
console.log(document.URL); // read only




/* === LOCATION === */

console.log('\n' + '%cDOM: %cLocation', 'color: blue', 'color: green' , '\n');

/*
console.log(location);
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.pathname);
// console.log(location.search); 
// console.log(location.hash);

// location.reload();
// location.assign("https://www.google.de");
// location.replace("https://www.google.de");




/* === NODES === */

console.log('\n' + '%cDOM: %cNodes', 'color: blue', 'color: green' , '\n');

/*
// get
let nodelist = document.querySelectorAll("p");
console.log(nodelist);

// child
let ul_node = document.querySelectorAll("#navigation > ul");
let child_nodes = ul_node.childNodes;
let first_child = ul_node.firstChild;
let last_child = ul_node.lastChild;

console.log(child_nodes);
console.log(first_child);
console.log(last_child);

// sibling
let next_sibling = ul_node.nextSibling;
let previous_sibling = ul_node.previousSibling;

console.log(next_sibling);
console.log(previous_sibling);

// for-loop
for (let i = 0; i < nodelist.length; i++) {
    console.log("for-loop output: ", nodelist[i]);
}

// for-of-loop
for (let e of nodelist) {
    console.log("for-of-loop output: ", e);
}

// for-each-loop
nodelist.forEach(function(e) {
    console.log("for-each-loop output: ", e);
});




/* === HTML-COLLECTION === */

console.log('\n' + '%cDOM: %cHTML-Collection', 'color: blue', 'color: green' , '\n');

/* 
let htmlCollection_ClassName = document.getElementsByClassName("article");
let htmlCollection_TagName = document.getElementsByTagName("li");

console.log(htmlCollection_ClassName);
console.log(htmlCollection_TagName);

//  for-loop

for (let i = 0; i < htmlCollection_ClassName.length; i++) {
    console.log("for-loop output: ", htmlCollection_ClassName[i]);
}

for (let i = 0; i < htmlCollection_TagName.length; i++) {
    console.log("for-loop output: ", htmlCollection_TagName[i]);
}

// for-of-loop

for (let e of htmlCollection_ClassName) {
    console.log("for-of-loop output: ", e);
}

for (let e of htmlCollection_TagName) {
    console.log("for-of-loop output: ", e);
}




/* === ELEMENTS === */

console.log('\n' + '%cDOM: %cElements', 'color: blue', 'color: green' , '\n');

/*
// get by id
console.log("%cget element: ", "color: green");
let navigation_getById = document.getElementById("navigation");
console.log(navigation_getById); 

// get by class name
let article_byClassName = document.getElementsByClassName("article");
console.log(article_byClassName); 
console.log(article_byClassName.length); 

// get by tag name
let paragraph = document.getElementsByTagName("p");
console.log(paragraph);
console.log(paragraph.length);

// child element
let ul_element = document.querySelector("#navigation > ul");
let element_children = ul_element.children;
let first_element_child = ul_element.firstElementChild;
let last_element_child = ul_element.lastElementChild;

console.log(element_children);
console.log(first_element_child);
console.log(last_element_child);

// sibling element
let next_element_sibling = ul_element.firstElementChild.nextElementSibling;
let previous_element_sibling = ul_element.lastElementChild.previousElementSibling;

console.log(next_element_sibling);
console.log(previous_element_sibling);

// parent element
let parent_element = ul_element.parentElement;

console.log(parent_element);

// navigation
let anchor = ul_element.querySelectorAll("li > a");

console.log(anchor);

// add element
let new_li = document.createElement("li");
let new_a = document.createElement("a");

// add adjacent element
let liste = document.querySelector("#navigation > ul");
// liste.insertAdjacentElement("beforebegin", li);
// liste.insertAdjacentElement("afterbegin", li);
// liste.insertAdjacentElement("beforeend", li);
// liste.insertAdjacentElement("afterend", li);

// add text node
let text_node = document.createTextNode("Element");

// append
new_a.appendChild(text_node);
new_li.appendChild(new_a);

// delete
let navigation_remove = document.querySelector("#navigation");
// navigation_remove.remove();




/* === ATTRIBUTE === */

console.log('\n' + '%cDOM: %cAttribute', 'color: blue', 'color: green' , '\n');

/* 
// has
console.log(document.querySelector("head > link").hasAttribute("rel"));

// get
console.log(document.querySelector("html").getAttribute("lang"));

// change 
let navigation = document.querySelector("#navigation");
let navigation_id = navigation.id;
navigation_id = "new-id";
console.log(navigation_id);

// add
document.querySelector(".article").setAttribute("lang", "de");

// delete
document.querySelector("head > meta:nth-of-type(3)").removeAttribute("content");




/* === CLASS === */

console.log('\n' + '%cDOM: %cClass', 'color: blue', 'color: green' , '\n');

/*
// get first 
let first_article = document.querySelector(".article");
console.log(first_article);

// get
let article_class = document.querySelector(".article");
let class_list = article_class.classList;
console.log(class_list);

// has
console.log(article_class.classList.contains("article"));

// add 
article_class.classList.add("my-class");
article_class.className += " new-class";

// change 
article_class.classList.toggle("new-class");
article_class.classList.toggle("new-class");

article_class.classList.replace("new-class", "new-class2");

document.querySelector("#navigation > ul li:first-of-type > a").className = "";
document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className = "active";

// delete
article_class.classList.remove("my-class", "new-class2");

// delete all
let article_remove = document.querySelectorAll(".article");
article_remove.forEach(function(e) {
    // e.remove();
});




/* === TEXT === */

console.log('\n' + '%cDOM: %cText', 'color: blue', 'color: green' , '\n');

/* 
let article_html = document.querySelector(".article");

console.log("%cget html: ", "color: green");
console.log(article_html.innerHTML); // HTML

console.log("%cget render text: ", "color: green");
console.log(article_html.innerText); // render Text

console.log("%cget string: ", "color: green");
console.log(article_html.textContent); // string Text

// let string_1 = "";
// let string_2 = "<header><h2>HELLO</h2></header>";
// let string_3 = "<p>WORLD</p>";
// let string_4 = "Lorem ipsum doloar sit amet.";

// article_html.innerHTML = string_2;

let liste = document.querySelector(".article > header > h2");

let dom_string = "<li id=\"mein-listenelement\"><a id=\"mein-ankerelement\" href=\"#\">Element</a></li>";

// liste.insertAdjacentHTML("beforebegin", dom_string);
// liste.insertAdjacentHTML("afterbegin", dom_string);
// liste.insertAdjacentHTML("beforeend", dom_string);
// liste.insertAdjacentHTML("afterend", dom_string);

let text_list = "Lorem ipsum dolor sit amet.";

// liste.insertAdjacentText("beforebegin", text);
// liste.insertAdjacentText("afterbegin", text);
// liste.insertAdjacentText("beforeend", text);
// liste.insertAdjacentText("afterend", text_list);




/* === STYLE === */
console.log('\n' + '%cDOM: %cStyle', 'color: blue', 'color: green' , '\n');

/*
let article_style = document.querySelector(".article");
console.log(article_style.style);
console.log(article_style.style.backgroundColor ="blue");

let navigation_style = document.querySelector("#navigation");
let navigation_compStyle = getComputedStyle(navigation_style);

let article_compStyle = getComputedStyle(article_style);
console.log(article_compStyle.backgroundColor);
console.log(article_compStyle.fontFamily);




/* End */
// Terminal$> .../npm run test
// quit npm Strg^C