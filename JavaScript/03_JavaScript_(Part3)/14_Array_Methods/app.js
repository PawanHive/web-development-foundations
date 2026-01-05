/*
*********************** Array Methods ****************** 

.push() ==> add to end
.pop() ==> delete from end & returns it

.unshift() ==> add to start
.shift() ==> delete from start & returns it 
*/

let cars = ['audi', 'BMW', 'xuv', 'maruti'];
console.log(cars)

//.push() ==> add to end
cars.push('toyota');
console.log(cars)           //output: (5) ['audi', 'BMW', 'xuv', 'maruti', 'toyota']

cars.push('ferrari');
console.log(cars)           //output: (6) ['audi', 'BMW', 'xuv', 'maruti', 'toyota', 'ferrari']

//.pop() ==> delete from end & returns it
cars.pop();
console.log(cars)           //output: (5) ['audi', 'BMW', 'xuv', 'maruti', 'toyota']

cars.pop();
console.log(cars)           //output: (4) ['audi', 'BMW', 'xuv', 'maruti']

//.unshift() ==> add to start
cars.unshift('toyota')
console.log(cars)           //output: (5) ['toyota', 'audi', 'BMW', 'xuv', 'maruti']

cars.unshift('ferrari')
console.log(cars)           //output: (6) ['ferrari', 'toyota', 'audi', 'BMW', 'xuv', 'maruti']

//.shift() ==> delete from end & returns it

cars.shift();
console.log(cars)           //output: (5) ['toyota', 'audi', 'BMW', 'xuv', 'maruti']

cars.shift();
console.log(cars)           //output: (4) ['audi', 'BMW', 'xuv', 'maruti']


//New real world Example: .pop() and .shift() delete but also return:

let instagramFollower = ['aman', 'suman', 'rohit'];

let blockedUser = instagramFollower.shift();

console.log(instagramFollower)  //output: (2) ['suman', 'rohit']
console.log(blockedUser)        //output: aman