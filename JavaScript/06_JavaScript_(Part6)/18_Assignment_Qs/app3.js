/*
Write a JavaScript function that accepts a list (array) of country names as input and returns the longest country name as output.
Example: country = ["Australia", "Germany", "United States of America"]
Output:"United States of America"
*/   




// Solution -------------------------------------------------------------------

let country = ['Australia', 'Germany', 'United States of America']
// console.log(country[2])

function largCountry(country) {

    let longest = country[0];    // assume first is longest

    for (let i = 0; i < country.length; i++) {
        
        if (country[i].length > longest.length) {
            longest = country[i];
        }
    }
    
    return longest;
}
console.log(largCountry(country))


//------------------------------------------------------------------------
//My Approach to Solution: Worked

// let country = ['Australia', 'Germany', 'United States of America']
// // console.log(country[2])

// function largCountry(country) {
//     let largest = 0;
//     for (let i = 0; i < country.length; i++) {
//         // console.log(i, country[i])
//         // console.log(largest)
//         if (largest < country[i].length) {
//             largest = country[i].length;
//                longest = country[i]                 // bad habit
//         }
//     }
    
//     return longest;
// }
// console.log(largCountry(country))        // 24    ... printed longest country length