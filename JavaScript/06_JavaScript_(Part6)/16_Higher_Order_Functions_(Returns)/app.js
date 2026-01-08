/*
************* Higher Order Function (return) **************

==> Returns a function as an output

*/

//HIHER ORDER FUNCTION
//here function will return another function as an output

// let request = 'odd'
function oddorEvenFactory(request) {
    if (request == 'odd') {
        return function(n) {
            console.log(!(n%2 == 0))
        }

        
    } else if(request == 'even') {
        return function(n) {
            console.log((n%2 == 0))
        }

        
    } else {
        console.log("Wrong requst")
    }
    
}

let fOdd = oddorEvenFactory('odd');      // now it will check odd no.
console.log(fOdd)    // return Odd function:   
console.log(fOdd(3))        // true
console.log(fOdd(6))        // false
console.log(fOdd(5))        // true

let fEven = oddorEvenFactory('even');
console.log(fEven);  // return Even function: 
console.log(fEven(3))        // false
console.log(fEven(6))        // true
console.log(fEven(5))        // false


/*
HIGHER ORDER FUNCTION wo function hote hain jo FUNCTIONs ko ya toh PARAMETER ke tarah lein ye FUNCTIONs ko RETURN karein
*/