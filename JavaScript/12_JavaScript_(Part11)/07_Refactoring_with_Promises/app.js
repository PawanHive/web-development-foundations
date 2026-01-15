/*
1️⃣ What is a Promise? (Definition)
==> A Promise is an OBJECT that represents the eventual 
result of an asynchronous operation — either RESOLVE or 
REJECT.

📌 Simple meaning:
“I promise I’ll give you a value later.”

------------------------------------------------------------

3️⃣ Promise States (VERY IMPORTANT)
==> A promise can be in only ONE state at a time:

| State       | Meaning                          |
| ----------- | -------------------------------- |
| `pending`   | Initial state (waiting)          |
| `fulfilled` | Operation successful (`resolve`) |
| `rejected`  | Operation failed (`reject`)      |

------------------------------------------------------------

4️⃣ Creating a Promise (SYNTAX):

let promise = new Promise((resolve, reject) => {
    // async operation
});

*/

//=========================================================

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");  
        } else {
            reject("failure: weak connection");
        }
    });
}

savetoDb("apna college");