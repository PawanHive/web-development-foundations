/*
******************* Methods *************************
==> Actions that can be performed on an object.

==> " jo function objects ke andar defined hote hain unko hum METHODS kehte hain"
*/

// HOW TO DEFINE OR CREATE METHODS
const calculator = {
    num: 55,
    add: function(a, b) {           // Method: calculator.add()
        return a + b;
    }, 
    sub: function(a, b) {           // Method: calculator.sub()
        return a - b;
    }, 
    mul: function(a, b) {           // Method: calculator.mul()
        return a * b;
    }
    
}
console.log(calculator)
console.log(calculator.num)       // 

    // now suppose we want to print add function and add some value and print
console.log(calculator.add)       
console.log(calculator.add(1, 2))       // 3
console.log(calculator.add(5, 6))       // 11

    // sub
console.log(calculator.sub)
console.log(calculator.sub(6, 4))       // 2
console.log(calculator.sub(11, 20))       // -9

    // mul
console.log(calculator.mul)      
console.log(calculator.mul(1, 3))       // 3
console.log(calculator.mul(5, 5))       // 25

// Now we can relate Math Objects
console.log(Math.PI)

console.log(Math.random)   //output: function   ... so here 'Math' is Object and 'random' is key which store this function         
console.log(Math.random())  // and as we know after adding () parenthesis code execute automatically    

// REMEMBER: that why we say every thing in JavaScript is OBJECT, because every method, emerges from OBJECT.

// -------------------------------------------------------------------

// (SHORTHAND)Method: WAY TO DEFINE OR CREATE METHOD EASILY: (here we don't need to use 'function' Keyword)

const calculat = {
    
    addd(a, b) {     
        return a + b;
    }, 
    subb(a, b) {        
        return a - b;
    }, 
    mull(a, b) {       
        return a * b;
    }
    
}

console.log(calculat)         // Object which stored function of method
console.log(calculat.addd)    // function
console.log(calculat.addd(11, 11))      // 22
console.log(calculat.subb(11, 11))      // 0
console.log(calculat.mull(11, 11))      // 121