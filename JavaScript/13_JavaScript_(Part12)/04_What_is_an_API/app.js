/*
**************************** API ******************************
1. API:
==> API (Application Programming Interface) is a way for two 
software applications to communicate with each other.

2. Analogy:

    Your app → asks API
    API → talks to server
    Server → sends data back

---------------------------------------------------------------------

🔹 Types of APIs (basic)

1️⃣ Web APIs (most common)
Used on the internet via URLs

Example: https://api.example.com/users

2️⃣ Browser APIs

Provided by browser
Examples:

    - fetch()
    - localStorage
    - geolocation

3️⃣ Third-party APIs

Made by companies
Examples:

    - Google Maps API
    - YouTube API
    - OpenWeather API

---------------------------------------------------------------------

🔹 How API works (step-by-step)

    - Client sends a request
    - API receives the request
    - Server processes it
    - API sends back a response

Client → API → Server → API → Client

---------------------------------------------------------------------

🔹 Common API Request Methods

Method	                 Meaning

GET	                    Get data
POST	                Send data
PUT	                   Update data
DELETE	               Delete data

---------------------------------------------------------------------

Key Points to Remember

    - API = communication bridge
    - API hides internal logic
    - Client never talks directly to database
    - Mostly uses JSON
    - fetch() is used to call APIs in JS
*/