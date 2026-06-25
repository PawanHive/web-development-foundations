# 01. Using the Console

- Console works on **REPL**
- REPL = Read → Evaluate → Print → Loop

## Console Shortcuts
- **Ctrl + L** → clear console
- **↑ Arrow** → previous commands
- **↓ Arrow** → newer commands

# 02. Variable (JavaScript)

- A variable is the **name of a storage location**

# 03. Data Types in JavaScript

## Primitive Types
- Number
- Boolean (`true / false`)
- String
- Undefined
- Null *(object)*
- BigInt *(less used)*
- Symbol *(less used)*

# 04. Numbers in JavaScript

- Positive (14) & Negative (-4)
- Integers (45–50)
- Floating numbers (4.6–8.9)

# 05. Operations in JavaScript

## Basic Operations
- Addition: `a + b`
- Subtraction: `a - b`
- Multiplication: `a * b`
- Division: `a / b`
- Modulo: `a % b`

## Modulo (Remainder)
- Example: `12 % 5 = 2`
- Used to find **Even / Odd**
  - `n % 2 === 0` → Even
  - else → Odd

## Exponentiation (Power)
- `a ** b`
- Example:
  - `2 ** 2 = 4`
  - `2 ** 4 = 16`

# 06. NaN in JavaScript

- NaN = **Not-A-Number**
- Represents invalid numeric result

## Examples
- `0 / 0`
- `NaN - 1`
- `NaN * 1`
- `NaN + NaN`

# 07. Operator Precedence

## Order
1. `()`
2. `**` *(if there multiple power operator: Right → Left)*
3. `* / %`
4. `+ -`

- `* / % + -` are solved **Left → Right**

## Examples
- `(2+1)*3 = 9`
- `3/1 + 2**2 = 7`
- `4 + 1*6/2 = 7`

# 08. Variable Keywords in JavaScript

## let
- Can be reassigned
- Can be declared first, assigned later

```js
let age = 23;
age = age + 1;

let cgpa;
cgpa = 8.9;
```
## const
- Constant values: **cannot be reassigned or redeclared**
- Examples:
```js
  const year = 2025  
  // year = 2026 → Error  
  const pi = 3.14  
  const g = 9.8
  ```

## var
- Old syntax for variables
- Can be redeclared
- Examples:
  ```js
  var age = 23  
  var cgpa = 8.9  
  var num1 = 1  
  var num2 = 2  
  var sum = num1 + num2
  ```
# 09.Updating Values in Variables

## Reassignment Matters
- Expression without assignment does **not** change value

```js
let age = 23;
age + 2;        // no change
console.log(age); // 23
```

# 10. Assignment Operators (JavaScript)

## Basic Operators
- `age = age + 1`  ⇄  `age += 1`
- `age = age - 1`  ⇄  `age -= 1`
- `age = age * 1`  ⇄  `age *= 1`
- `age = age / 4`  ⇄  `age /= 4`
- `num = num % 1`  ⇄  `num %= 1`

## Example
```js
let age = 24;
age += 1;
console.log(age); // 25
```

# 11. Unary Operators (JavaScript)

- Operates on **one operand** only

## Increment / Decrement
- `++age` → pre-increment (change, then use)
- `age++` → post-increment (use, then change)
- `--age` → pre-decrement (change, then use)
- `age--` → post-decrement (use, then change)

# 12. Pre/Post Increment Example

```js
let num = 5;
let newNum = num++;   // newNum = 5, num = 6
newNum = ++num;       // newNum = 7, num = 7
```

# 13. Identifier Rules (JavaScript)

- Variables must have **unique names**
- Can contain letters, digits, `_`, `$` (no spaces)
- Must start with a **letter**, `$`, or `_`
- Case sensitive (`y` ≠ `Y`)
- Cannot use **reserved words** (JS keywords)

## Naming Styles
- `camelCase` → JS convention
- `snake_case`
- `PascalCase`

# 14. Boolean (JavaScript)

- Represents **truth value** → `true` / `false`

# 15. What is TypeScript?

- **Static typed** language (JS is dynamic typed)  
- Designed by **Microsoft**

## Example: JavaScript
```js
a = 10;    // number
a = true;  // boolean → allowed in JS (but not in typescript)
```

# 17. Strings (JavaScript)

- Text or sequence of characters

## Examples
```js
let name = "Tony Stark";
let role = 'ironman';
let char = 'a';
let num = '234';
let empty = "";
```

# 18. String Indices in JavaScript

- Access characters using **index** (0-based)
```js
let name = "TONY STARK";
name[0]  // 'T'
name[1]  // 'O'
```
- Get string length
```js
name.length       // 10
"pawan".length    // 5
```
- Concatenation
```js
"tony" + " " + "stark"  // "tony stark"
"tony" + 1              // "tony1"
```
# 19. undefined & null (JavaScript)

## undefined
- A variable that has **not been assigned a value** is of type undefined.
- Example:
  ```let a;  → a is undefined```

## null
- Represents the **intentional absence** of any value.
- To be explicitly assigned to avoid undefined.
- Example:
  ```let a = null  → a is null```
