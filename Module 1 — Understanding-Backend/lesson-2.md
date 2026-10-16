## Lesson 2 — Client, Server, Requests, and Responses
 
### 1. Learning objectives
 
- Explain what a "client" and a "server" are.
- Explain what a "request" and a "response" are.
- Describe, step by step, what happens when a frontend asks a backend for data.
### 2. Why are we learning this?
 
Every single thing you will build in this course — every route, every endpoint, every API — is built around one repeating pattern: a client sends a **request**, a server sends back a **response**. If this pattern is solid in your head, everything else in this course will make sense much faster.
 
### 3. Concept explanation
 
A **client** is anything that asks for something: a browser, a React app, a mobile app, even a tool like Postman. A **server** is a program that is always running, waiting for clients to ask it for something.
 
A **request** is the message the client sends. It usually says: "I want this," or "please do this with this data."
 
A **response** is the message the server sends back. It says: "here is what you asked for," or "here is what happened," possibly with data attached.
 
You already do this every day without knowing the backend term for it:
 
```js
fetch("/api/students")
```
 
This line of React/JavaScript code you already know **is** a request. Whatever comes back from it is the response.
 
### 4. Real-world analogy
 
```text
You (client) call a pizza shop (server).
You (client) say: "One large pepperoni pizza" (request)
The shop prepares it and calls back: "Your pizza is ready, here it is" (response)
```
 
### 5. Syntax/code
 
No new syntax yet — we are still building the mental model before touching Node.js.
 
### 6. Practical example
 
```text
React app                          Backend server
----------                         ---------------
fetch("/api/students")   ----->    receives the request
                                    looks up student data
        <-----------------------   sends back JSON response
students data arrives
```
 
This is exactly what you will build starting in Module 4 — except now you'll understand both sides of the arrow, not just the `fetch()` side.
 
### 7. Common beginner mistakes
 
- Thinking the "request" is just the URL. A request also carries a method (like GET or POST) and sometimes data — we'll cover this properly in Module 5.
- Thinking the server "pushes" data to the client on its own. In this course, the client always asks first (this is the normal request/response model).

 
### 8. Assignment
 
Write a short explanation (in your own words) walking through, step by step, what happens between the moment a user clicks "View my grades" on a website and the moment their grades appear on screen. Use the words **client**, **request**, **server**, and **response** correctly, at least once each.
 
### 9. Assignment requirements
 
- Must use all four terms correctly: client, request, server, response.
- Must describe the flow as a sequence of steps (numbered list is fine).

 
---
