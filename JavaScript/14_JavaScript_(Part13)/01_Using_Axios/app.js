/*
************************ Using Axios ***********************

1. Axios Library:
==> Axios is a JavaScript library used to make HTTP requests 
(to APIs or servers) from browser or Node.js applications.

In simple words:
👉 Axios helps your app talk to a backend or API easily.

-------------------------------------------------------------------

# . WHY AXIOS IS USED:

==> Axios makes working with APIs cleaner and easier compared to 
plain fetch.

KEY FEATURES:

- Supports GET, POST, PUT, DELETE requests
- Automatically converts JSON ↔ JavaScript objects
- Better error handling
- Supports async/await
- Can set default headers (like auth tokens)
- Works in browser + Node.js

----------------------------------------------------------------- 

INSTALLING AXIOS:

1. In browser (CDN)
<script src="https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js"></script>

2. In Node.js
npm install axios

----------------------------------------------------------------- 

Axios vs Fetch (Quick Comparison):

| Feature         | Axios     | Fetch   |
| --------------- | --------- | ------- |
| JSON parsing    | Automatic | Manual  |
| Error handling  | Better    | Limited |
| Request timeout | Yes       | No      |
| Interceptors    | Yes       | No      |
| Browser support | Yes       | Yes     |

*/

//===============================================================

let url = "https://catfact.ninja/fact";

// async function getFacts() {

//     try {
//         // -> first data call
//         let res = await fetch(url);       // agar ham fetch() ke aage 'await' naa lagaye toh pehle console.log ki execution ho jayegi kyu ki API se data aane me time lageta hai, agar ham 'await' laga denge to url se data fetch hone ke baad hi console.log() execute hoga
//         let data = await res.json();
//         console.log("data1:", data.fact);

//         // -> second data call
//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data2:", data2.fact);
//     } catch (err) {
//         console.log("error -", err);
//     }

//     console.log("bye")
// }
// getFacts();

//---------------------------------------------------------------

// # Refactor Above commented code using Axios Library:

// async function getFacts() {

//     try {
//         // -> first data call
//         let res = await axios.get(url);       
//         console.log(res);
//         console.log(res.data);
//         console.log(res.data.fact);

//         // -> second data call
//         let res2 = await axios.get(url);
//         console.log(res2);
//         console.log(res2.data);
//         console.log(res2.data.fact);
//     } catch (err) {
//         console.log("error -", err);
//     }

//     console.log("bye")
// }
// getFacts();

//----------------------------------------------------------------

// # we have to create a Program which show random cat facts
// when use click the button, fact should display over the screen:

let btn = document.querySelector('button');

btn.addEventListener('click', async function() {
    let fact = await getFacts();                  // if we don't add 'await' here so will return a 'pending' state promise, because getFacts() is asynchronous function means console.log() will execute early if we don't add 'await', and as we know we 'await' always used in inside async function, so we have to make this function async
    console.log(fact)
    let p = document.querySelector('#result');
    p.innerText = fact;
});

async function getFacts() {

    try {
        let res = await axios.get(url);       
        return res.data.fact;
    } catch (err) {
        console.log("error -", err);
        return "No fact found";
    }

    console.log("bye")
}
getFacts();