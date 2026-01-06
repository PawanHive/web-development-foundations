/*
**************** Nested for-of Loop *********************
*/

let heroes = [ ['ironman', 'spiderman', 'thor'], ['superman', 'wonder woman', 'flash']]

for (const list of heroes) {
    console.log(list)               // list of heroes form two different array
    for (const hero of list) {
        console.log(hero)           // now name of hero from two different list of heroes array
    }
}