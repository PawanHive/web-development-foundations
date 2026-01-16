/*
********************** Our First Request ********************

using Fetch

fetch(url)
*/

let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         // console.log(res.json());
//         res.json().then((data) => {             // res.json() method parse the data, make it more readable
//             console.log(data)
//         })
//     })
//     .catch((err) => {
//         console.log("ERROR -", err);
//     })


// # Refactor Above Code

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();          // just used return here, bascially skip nested chaining as happened in above code
//     })
//     .then((data) => {             // res.json() method parse the data, make it more readable
//             console.log(data)
//             console.log(data.fact)
//         })
//     .catch((err) => {
//         console.log("ERROR -", err);
//     })

// # Call two times for data:
fetch(url)
    .then((res) => {
        return res.json();          // just used return here, bascially skip nested chaining as happened in above code
    })
    .then((data) => {             // res.json() method parse the data, make it more readable
            console.log("data1 :", data.fact)
            return fetch(url);
        })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log(("data2 : ", data2.fact))
    })
    .catch((err) => {
        console.log("ERROR -", err);
    })