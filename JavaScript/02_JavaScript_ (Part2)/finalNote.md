# #3: Template Literals

Exmaple:
```js
const name = "Pawan";
const age = 21;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
```
Output: 
```bash
My name is Pawan and I am 21 years old.

```
- `${}` is called **expression interpolation**  
- Whatever JavaScript you put inside `${}` gets evaluated.

# #4: Operator in JS

### Operators:
```js
let a = 10;
let b = 5;
```

### Arithmetic Operators (+, -, *, /, %, **)
```js
console.log(a+b);       // 15
console.log(a-b);       // 5
console.log(a*b);       // 50
console.log(a/b);       // 2
console.log(a%b);       // 0
console.log(a**b);       // 100000
```


### Unary Operators (++, --):
```js
console.log(a++);       // 10
console.log(++a);       // 12
console.log(a--);       // 12
console.log(--a);       // 10
```

### Assignment Operators (=, +=, -=, *=, /=, %= etc):
```js
b = a;
console.log(b);       // 10
console.log(a += 2);       // 12
console.log(a -= 2);       // 10
console.log(a *= 2);       // 20 // here value of 'a' becomes 20
console.log(a /= 10);       // 2
console.log(a %= 2);       // 0
```

# #5: Comparison Operator


`>` --> **Greater than**

`>=` --> **greater than or equalto**

`<` --> **Less than**

`<=` --> **Less than or equalto**

`==` --> **equal to**

`!=` --> **not equal to**


### Operators
```js
let age = 18;
console.log(age > 18);      //output: false
console.log(age >= 18);     //output: true
console.log(age < 18);      //output: false
console.log(age >= 18);     //output: true
console.log(age == 18);     //output: true
console.log(age != 18);     //output: false
console.log(5 != 4);        //output: true
console.log(5 != 5);        //output: false
```

### Equal-to Operator (==)... only compares value, not type:
```js
console.log(5 == '5');          //output: true.... because only compare NUMBER not TYPE
console.log('5' == 5);          //output: true
console.log(0 == ' ');         //output: true
console.log(0 == false);       //output: true
console.log(0 == true);          //output: false
console.log(1 == true);          //output: true
console.log(null == undefined);       //output: true
```

### Triple Equal-to Operator (===) ... Compares type & value:
```js
console.log(5 === '5');       //output: false.... because compare VALUE as well as TYPE
console.log('5' === 5);       //output: false
console.log(0 === ' ');       //output: false
console.log(0 === false);       //output: false
console.log(0 === true);       //output: false
console.log(1 === true);       //output: false
console.log(null === undefined);       //output: false
```

# #6: Comparison for Non-numbers (Stirngs)

In JavaScript, **strings are compared based on Unicode (ASCII) values**, character by character.

### Character Values (Important)

- `'A' → 65`, `'B' → 66`, `'C' → 67` …
- `'a' → 97`, `'b' → 98`, `'c' → 99` …

⚠️ **Important Rule**  
Lowercase letters have **higher Unicode values** than uppercase letters.

Examples:
```js
console.log('a' < 'b')      //output: true
console.log('a' > 'b')      //output: false
console.log('a' < 'A')      //output: false
console.log('a' > 'A')      //output: true
console.log('B' < 'b')      //output: true
console.log('B' < 'c')      //output: true
console.log('*' < '&')      //output: false
console.log('*' > '&')      //output: true
```

# #7: `if` statement

An `if` statement is used to **run a block of code only when a condition is true.**

Syntax of `if`: 
```js
if (condition) {
  // code to run if condition is true
}
```

Example:
```js
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}
```

# #10: `else if` statement

The `else if` statement is used when you want to **check more than one condition**.
JavaScript checks conditions **one by one, from top to bottom**.

👉 **As soon as it finds the first condition that is true:**
- that block of code runs
- all remaining conditions are **ignored**

### Simple Meaning (Very Important)

> JavaScript stops checking once it finds a true condition.

Only **one block** will ever run.

## Syntax of `else if`

```js
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition2 is true
} else if (condition3) {
  // runs if condition3 is true
} else {
  // runs if none of the above conditions are true
}
```

Example: 
```js
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
else if (marks == 33) {        
    console.log("Just Pass")
}
else if (marks < 33) {
    console.log("Fail");
}
```

# #11: `else` statement

`else` is used to **run code when all `if` and `else if` conditions are false**.

👉 Think of `else` as the **last option / default case**.

## Syntax of `else`

```js
if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}
```

Example:
```js
let age = 15;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
```

# #13: Nested `if else` statement

An `if` or `else` statement inside another `if` or `else`.

In simple words:
👉 You are checking a condition inside another condition.

Syntax:
```js
if (condition1) {
  if (condition2) {
    // runs if condition1 AND condition2 are true
  } else {
    // runs if condition1 is true but condition2 is false
  }
} else {
  // runs if condition1 is false
}
```

Example:
```js
let marks = 45;

if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {                  // from here is NESTED IF-ELSE
        console.log("Grade: O")
    } else {
        console.log("Grade: A")
    }
} else {
    console.log("Better luch next time!");
}
```

# #14: Logical Operator

Logical operators are used to **combine expressions** and evaluate them as `true` or `false`.

## Types of Logical Operators

### Logical AND (`&&`)
- Both conditions should be **TRUE**

### Logical OR (`||`)
- Any one condition should be **TRUE**

### Logical NOT (`!`)
- Reverses the result  
- TRUE becomes FALSE  
- FALSE becomes TRUE

## Important Note ⚠️

> While calculating logical operators, JavaScript evaluates expressions **from LEFT to RIGHT**.

---

## Example
```js
    let marks = 23;

    if ((marks > 33 && marks <= 80) || !false) {
        console.log("Pass");
    }
```
---

## Output
```bash
    Pass
```
---

## Explanation

- `marks > 33` → false  
- `marks <= 80` → true  
- `false && true` → false  
- `!false` → true  
- `false || true` → true  

Since the final result is `true`, `"Pass"` is printed.

---


# #16: truthy & falsy

- In JavaScript, **everything becomes either `true` or `false` when used in a boolean context** (like `if`, `while`, logical operators).
- This does **NOT** mean the value itself is `true` or `false`.
- It only means how JavaScript **treats the value** when checking a condition.

---

## Falsy Values ❌

These values are treated as `false` in a boolean context:

- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

---

## Truthy Values ✅

- **Everything else** is treated as `true`.

Examples:
- `"hello"`
- `1`, `-5`
- `" "` (string with space)
- `[]`
- `{}`

---

## Example
```js
    if (0) {
        console.log("it has true value");
    } else {
        console.log("it has false value");
    }
```
---

## Output
```bash
    it has false value
```
---

## Explanation

- `0` is a **falsy value**
- JavaScript treats `0` as `false` inside the `if` condition
- So the `else` block runs

---

## Key Point to Remember 🧠

> Falsy values are few and fixed.  
> Everything else in JavaScript is truthy.

---

# #17: Switch statement

# Switch Statement in JavaScript

## What is a `switch` statement?

A `switch` statement evaluates a value and **runs the code block that matches a case**.  
It’s like a menu: depending on the option, a different block runs.

---

## Syntax of `switch`
```js
    switch(expression) {
        case value1:
            // code to run if expression === value1
            break;
        case value2:
            // code to run if expression === value2
            break;
        case value3:
            // code to run if expression === value3
            break;
        default:
            // code to run if none of the above matches
    }
```
---

## Important Notes

1. `break` stops execution from **falling through** to the next case.
2. `default` is optional — runs when no case matches.
3. The comparison is **strict (`===`)**, no type coercion.

---

## Simple Example
```js
let color = "red";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log("go slow");
        break;
    default:
        console.log("Light is broken");
}
```

### Output
```js
    stop
```

# #19: Alert & Prompt

# Alert and Prompt in JavaScript

---

## 1️⃣ `alert()`

- `alert()` is used to **show a message to the user** in a popup box.
- It does **not return any value**.
- Usually used for **notifications, warnings, or info**.

### Syntax

    alert("Your message here");

### Example
```js
    alert("Hello, Pawan!");
```

---

## 2️⃣ `prompt()`

- `prompt()` is used to **ask the user to enter some input** in a popup.
- It **returns the value entered** as a string.
- You can also provide a **default value**.

### Syntax
```js
    prompt("Message for user", "default value");
```
### Example
```js
    let name = prompt("Enter your name", "Guest");
    alert("Hello, " + name + "!");
```
💡 Steps:

1. A popup asks: `Enter your name` (default is `"Guest"`)
2. User types something (e.g., `"Pawan"`)
3. `alert()` shows: `Hello, Pawan!`

---

## Important Notes ⚠️

1. Both `alert` and `prompt` **pause the code** until user interacts with the popup.
2. `prompt()` **always returns a string**. If you need a number:
```js
        let age = prompt("Enter your age");
        age = Number(age);
```

## One-Line Interview Definition 🎯

> `alert()` shows a message, `prompt()` asks the user for input and returns it as a string.
