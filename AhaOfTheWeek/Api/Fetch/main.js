"use strict";

/* === GET TEXT === */
console.log('\n' + '%cFETCH: %cGet Text', 'color: blue', 'color: green' , '\n');

// /*
document.getElementById('getText').addEventListener('click', getText);

function getText() {
    // fetch('sample.txt')
    // .then(function(res) {
    //     return res.text();
    // })
    // .then(function(data) {
    //     console.log(data);
    // })

    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err))
}




/* === GET USERS === */
console.log('\n' + '%cFETCH: %cGet Users', 'color: blue', 'color: green' , '\n');

// /*
document.getElementById('getUsers').addEventListener('click', getUsers);

function getUsers() {
    fetch('user.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(function(user){
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `; 
        });
        document.getElementById('output').innerHTML = output;
    })
}




/* === GET POSTS === */
console.log('\n' + '%cFETCH: %cGet Posts', 'color: blue', 'color: green' , '\n');

// /*
document.getElementById('getPosts').addEventListener('click', getPosts);

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach(function(post){
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `; 
        });
        document.getElementById('output').innerHTML = output;
    })
}




/* === ADD POST === */
console.log('\n' + '%cFETCH: %cAdd Post', 'color: blue', 'color: green' , '\n');

// /*
document.getElementById('addPost').addEventListener('submit', addPost);

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}




/* End */
// Terminal$> .../npm run test
// quit npm Strg^C