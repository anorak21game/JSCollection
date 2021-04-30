"use strict";

/* === GET TEXT === */
console.log('\n' + '%cFETCH: %cGet Text', 'color: blue', 'color: green', '\n');

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

    // Fat Arrow
    const requestText = fetch('sample.txt')
    requestText
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err))
}




/* === GET USERS === */
console.log('\n' + '%cFETCH: %cGet Users', 'color: blue', 'color: green', '\n');

// /*
document.getElementById('getUsers').addEventListener('click', getUsers);

function getUsers() {
    const requestUsers = fetch('user.json')
    requestUsers
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Users</h2>';
            data.forEach(function (user) {
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




/* === GET PRODUCTS === */
console.log('\n' + '%cFETCH: %cGet Products', 'color: blue', 'color: green', '\n');

// /*
document.getElementById('getProducts').addEventListener('click', getProducts);

const products_url = 'https://shifter.staging.shiftphones.com:30484/api/products';

async function getProducts() {
    await fetch(products_url, { mode: 'no-cors' })
        .then(res => res.json())
        .then(data => {
            console.table(data);
            return data
        })
        .catch(e => {
            console.log(e);
            return e;
        });

    // .then(blob => blob.json())
    // .then(data => {
    //     console.table(data);
    //     return data;
    // })
    // .catch(e => {
    //     console.log(e);
    //     return e;
    // });

    // .then((res) => res.json())
    // .then((data) => {
    //     console.table(data);
    //     let output = '<h2>Shifters</h2>';
    //     data.forEach(function(product){
    //         output += `
    //             <ul>
    //                 <li>ID: ${product.id}</li>
    //             </ul>
    //         `; 
    //     });
    //     document.getElementById('output').innerHTML = output;
    // })
}




/* === GET ISS === */
console.log('\n' + '%cFETCH: %cGet ISS', 'color: blue', 'color: green', '\n');

// /*
document.getElementById('getISS').addEventListener('click', getISS);

const iss_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {
    await fetch(iss_url)
        .then(res => res.json())
        .then(data => {
            console.table(data);
            return data
        })
        .catch(e => {
            console.log(e);
            return e;
        });
}




/* === GET POSTS === */
console.log('\n' + '%cFETCH: %cGet Posts', 'color: blue', 'color: green', '\n');

// /*
document.getElementById('getPosts').addEventListener('click', getPosts);

function getPosts() {
    const requestPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    requestPosts
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Posts</h2>';
            data.forEach(function (post) {
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
console.log('\n' + '%cFETCH: %cAdd Post', 'color: blue', 'color: green', '\n');

// /*
document.getElementById('addPost').addEventListener('submit', addPost);

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    const requestAddPost = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body })
    })
    requestAddPost
        .then((res) => res.json())
        .then((data) => console.log(data))
}




/* End */
// Terminal$> .../npm run test
// quit npm Strg^C