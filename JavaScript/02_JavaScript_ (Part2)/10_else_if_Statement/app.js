/* 
**********************else if statement****************************
if (condition) {
// DO SOMETHING
}

else if (condition2) {
// DO SOMETHING ELSE
}

else if (condition3) {
// DO SOMETHING ELSE
}
*/

// Example 1 ---------------------------------------
let age = 16;
if (age >= 18) {
    console.log("You can vote");
}
else if (age < 18) {
    console.log("You can not vote, because you're minor");
}


// Example 2 ---------------------------------------
let marks = 33;
if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A")
}
else if (marks > 33) {
    console.log("B")
}
else if (marks == 33) {         // '==' is assignment operator not comaprison operator
    console.log("Just Pass")
}
else if (marks < 33) {
    console.log("Fail");
}

// Example 3 --------------------------------------
let month = "january";

if (month === "january") {
    console.log("winter is here");
}
else if (month === "april") {
    console.log("summer is here");
}