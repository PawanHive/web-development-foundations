/*

1️⃣ Query Parameters (MOST COMMON)
🔹 Format
?key=value&key2=value2

🔹 Example
https://example.com/search?q=javascript&page=2

🔹 Another Real Example: 
https://google.com/search?q=mango               // will give information about as we typed in search bar

🔹 Meaning

q=javascript → search term
page=2 → page number

---------------------------------------------------------------------

2️⃣ Path Parameters (URL Params)
🔹 Format
/resource/value

🔹 Example
https://example.com/users/25

🔹 Meaning
25 → user ID

---------------------------------------------------------------------

3️⃣ Hash / Fragment (#)
🔹 Example
https://example.com/page#about

🔹 Meaning
Jumps to a section
Used in SPA routing
🚫 Not sent to server

---------------------------------------------------------------------

4️⃣ Encoding Data (URL Encoding)
Some characters must be encoded:

    space → %20
    & → %26
    = → %3D

🔹 Example
hello world → hello%20world
*/