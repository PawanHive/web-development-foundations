/*
# How to pass Headers in our request using Axio:

(step 1): Create Header: 
    // --> this is how header created:

const config = {
                headers: {
                    Accept: "application/json"
                }
            };

----------------------------------------------

    -> it can also create in one line like below:

const config = { headers: { Accept: "application/json"}};

(Step 2): 
    // -> then we pass it as a 2nd argument in axios.get() function.
*/

//====================================================================

// # Some APIs return data in HTML format by default.
// # If we want the response in JSON format, we must explicitly
//     specify it using request headers.

let url = "https://icanhazdadjoke.com/";

async function getJoke() {
    const config = { headers: { Accept: "application/json"}};       // REMEMBER SYNTAX: how we create headers
    let res = await axios.get(url, config);         // REMEMBER - Pass header as a 2nd argument in axios.get() function after create, 
    console.log(res.data)                    // give response in HTML format instead of JSON, if we didn't created and passes the 'headers' for 'application/json'
}
getJoke();

        /*
            NOTE:
            first of all REMEMBER syntax of how to pass 'headers' in Axios
            and then we have to pass it as a 2nd argument in axios.get() function 
            after create
        */

//----------------------------------------------------------------------------------------