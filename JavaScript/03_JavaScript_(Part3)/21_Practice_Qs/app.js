/*
********************** Practice Qs ***********************

Qs. For the given start of an array, change it to final form using splice.

start: ['january', 'july', 'march', 'august']
end: [ 'july', 'june', 'march', 'august']
*/

//solution:

let months = ['january', 'july', 'march', 'august'];
console.log(months.splice(0, 2, 'july', 'june'))
console.log(months)
//output: (4) ['july', 'june', 'march', 'august']

//-------------------------------------------------------

/*
Qs. Return the index of the 'javascript' from the given array, if it was reversed.

['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']
*/

let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
lang.reverse();
console.log(lang);              //output: (8) ['sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++', 'c']
console.log(lang.indexOf('javascript'));            
//output: 4
