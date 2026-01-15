/*
*********** Visualizing the Call Stack **************

*/

//Example: 

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();


/*
## EXPLANATION OF ABOVE CODE WITH EXACT EXACUTION ORDER OF CALL STACK:

🟢 STEP 0: Global Execution Context
When JS starts, it creates Global Execution Context (GEC)

| Global() |
|__________|

//---------------------------------------------------------------------

🟢 STEP 1: three() is called
| three()  |
| Global() |
|__________|

JS now starts executing three().

//---------------------------------------------------------------------

🟢 STEP 2: Inside three() → two() is called

Line:
let ans = two() + one();

two() is called first.

| two()    |
| three()  |
| Global() |
|__________|

//---------------------------------------------------------------------

🟢 STEP 3: Inside two() → first one() call

Line:
return one() + one();


First one() is called.

| one()    |
| two()    |
| three()  |
| Global() |
|__________|

//---------------------------------------------------------------------

🟢 STEP 4: one() returns 1 → POP
| two()    |
| three()  |
| Global() |
|__________|

(Value returned = 1)

//---------------------------------------------------------------------

🟢 STEP 5: Inside two() → second one() call
| one()    |
| two()    |
| three()  |
| Global() |
|__________|

//---------------------------------------------------------------------

🟢 STEP 6: one() returns 1 → POP
| two()    |
| three()  |
| Global() |
|__________|

Now:
one() + one() = 1 + 1 = 2

//---------------------------------------------------------------------

🟢 STEP 7: two() returns 2 → POP
| three()  |
| Global() |
|__________|

//---------------------------------------------------------------------

🟢 STEP 8: Back in three() → one() is called

Remaining part:
let ans = 2 + one();

| one()    |
| three()  |
| Global() |
|__________|

//---------------------------------------------------------------------

🟢 STEP 9: one() returns 1 → POP
| three()  |
| Global() |
|__________|

Now:
ans = 2 + 1 = 3

//---------------------------------------------------------------------

🟢 STEP 10: console.log(ans) executes
| console.log() |
| three()       |
| Global()      |
|_______________|

Output:
3

//---------------------------------------------------------------------

🟢 STEP 11: console.log() finishes → POP
| three()  |
| Global() |
|__________|

//---------------------------------------------------------------------

🟢 STEP 12: three() finishes → POP
| Global() |
|__________|

//---------------------------------------------------------------------

🟢 STEP 13: Program Ends (Stack Empty)

✔️ Call Stack is now empty
✔️ Execution finished

//---------------------------------------------------------------------

🔁 COMPLETE CALL STACK FLOW (Quick View)
Global
 → three()
   → two()
     → one() → pop
     → one() → pop
   → pop
   → one() → pop
   → console.log()
 → pop

//---------------------------------------------------------------------

🧠 Key Observations ⭐

one() is called 3 times
Each function must return before next executes
Nested calls pause the current function
Stack always clears from top

🧩 Final Output
3


*/