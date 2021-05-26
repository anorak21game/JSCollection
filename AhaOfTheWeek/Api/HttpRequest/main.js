"use strict";

/* === READY STATE === */
console.log('\n' + '%cHTTPREQUEST: %cReady State', 'color: blue', 'color: green', '\n');
 
/*
0 = UNSENT              Client has been created. open() not called yet.
1 = OPENED              open() has been called.
2 = HEADERS_RECEIVED    send() has been called, and headers and status are available.
3 = LOADING             Downloading; responseText holds partial data.
4 = DONE                The operation is complete.
*/

// /*
// uninitialized
const myRequest = new XMLHttpRequest();
console.log("Ready State UNSENT:", myRequest.readyState); // readyState will be 0

// loading
myRequest.open('GET', 'https://reqres.in/api/users/2');
console.log("Ready State OPENED:", myRequest.readyState); // readyState will be 1

// loaded
myRequest.onreadystatechange = () => {
    if (myRequest.readyState == 4) {
        if (myRequest.status == 200) {
            document.getElementById('getSomething').textContent = myRequest.responseText;
        }
        if (myRequest == 404) {
            console.log('File or resource not found');
        }  
    }
    if (myRequest.readyState == 2) {
        console.log("Ready State HEADERS_RECEIVED:",myRequest.readyState); // readyState will be 2
    }
}

// interactive
myRequest.onprogress = () => {
    console.log("Ready State LOADING:", myRequest.readyState); // readyState will be 3
};

// complete
myRequest.onload = () => {
    console.log("Ready State DONE:",myRequest.readyState); // readyState will be 4
}
myRequest.send(null);






/* === GET DATA === */
console.log('\n' + '%cHTTPREQUEST: %cGet Data', 'color: blue', 'color: green', '\n');

// /*
const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.open(method, url);

        xhttp.responseType = 'json'
        
        if (data) {
            xhttp.setRequestHeader('Content-Type', 'application/json');
        }

        xhttp.onload = () => {
            if (xhttp.status >= 400) {
                reject(xhttp.response);
            } else {
                resolve(xhttp.response);
            }
            resolve(xhttp.response);
        };

        xhttp.onerror = () => {
            reject('something went wrong!');
        }

        xhttp.send(JSON.stringify(data))
    });
    return promise;    
}

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users')
    .then(responseData => {
        console.log(responseData);
    }).catch( err => {
        console.log(err);
    });
}

document.getElementById('getData').addEventListener('click', getData);



/* === POST DATA === */
console.log('\n' + '%cHTTPREQUEST: %cPost Data', 'color: blue', 'color: green', '\n');

// /*
const postData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: "eve.holt@reqres.in",
        password: "pistol"
    }).then(responseData => {
        console.log(responseData);
    });
}

document.getElementById('postData').addEventListener('click', postData);



/* End */
// Terminal$> .../npm run test
// quit npm Strg^C