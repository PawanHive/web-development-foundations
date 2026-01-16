


let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json();          // just used return here, bascially skip nested chaining as happened in above code
//     })
//     .then((data) => {             // res.json() method parse the data, make it more readable
//             console.log("data1 :", data.fact)
//             return fetch(url);
//         })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log(("data2 : ", data2.fact))
//     })
//     .catch((err) => {
//         console.log("ERROR -", err);
//     })


// # Refactor above code using async & await function:

async function getFacts() {

    try {
        // -> first data call
        let res = await fetch(url);       // agar ham fetch() ke aage 'await' naa lagaye toh pehle console.log ki execution ho jayegi kyu ki API se data aane me time lageta hai, agar ham 'await' laga denge to url se data fetch hone ke baad hi console.log() execute hoga
        let data = await res.json();
        // console.log(data)
        console.log("data1:", data.fact);
        // console.log(res) 

        // -> second data call
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("data2:", data2.fact);
    } catch (err) {
        console.log("error -", err);
    }

    console.log("bye")
}
getFacts();