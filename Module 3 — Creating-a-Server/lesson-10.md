## Lesson 10 — The Request and Response Objects
 
### 1. Learning objectives
 
- Understand what information `req` carries.
- Use different `res` methods: `res.json()`, `res.send()`, `res.status()`.
- Combine a status code with a JSON response.

### 2. Why are we learning this?
 
Every route you will ever write uses `req` and `res`. You've used them briefly already, but this lesson slows down to properly explain what each object gives you, so you can use them confidently and correctly for the rest of the course.
 
### 3. Concept explanation
 
**`req` (request)** represents the incoming request from the client. It carries information such as:
 
- `req.url` — the path that was requested.
- `req.method` — the HTTP method used (GET, POST, etc. — covered fully in Module 5).
- (Later, in Module 6/7) `req.params`, `req.query`, and `req.body`.


**`res` (response)** is what you use to send something back. Common methods:
 
- `res.send(data)` — sends a response; Express will figure out the content type.
- `res.json(data)` — sends a response specifically as JSON (the one we'll use most).
- `res.status(code)` — sets the status code. Often chained: `res.status(200).json({...})`.
Chaining `res.status(...).json(...)` means: "set this status code, **then** send this JSON," both in one line.
 
### 4. Syntax/code
 
```js
app.get("/status-demo", (req, res) => {
  res.status(200).json({ message: "Everything is fine" });
});
```
 
```js
app.get("/info", (req, res) => {
  console.log(req.method); // "GET"
  console.log(req.url);    // "/info"
  res.json({ method: req.method, path: req.url });
});
```
 
### 5. Practical example
 
```js
import express from "express";
const app = express();
 
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Server is healthy" });
});
 
app.get("/debug", (req, res) => {
  res.json({
    requestedPath: req.url,
    requestedMethod: req.method,
  });
});
 
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```
 
### 6. Common beginner mistakes
 
- Calling `res.json()` more than once in the same route — Express throws an error because a response can only be sent once per request ("headers already sent").
- Confusing `res.send()` and `res.json()` — for this course, always prefer `res.json()` when returning data, for consistency and clarity.
- Forgetting that `res.status(200)` alone does not send anything — it must be chained with `.json()` or `.send()`.

### 7. Common beginner mistakes (continued)
 
- Trying to read `req.body` at this stage — it isn't available yet without extra setup, which is covered properly in Lesson 16.
### 8. Mini practice
 
Add a route `/whoami` that responds with `req.method` and `req.url`, formatted into a sentence like `"You made a GET request to /whoami"`.
 
### 8. Assignment
 
Create an Express server with:
 
1. `GET /ping` → responds with status `200` and JSON `{ "message": "pong" }`.
2. `GET /server-info` → responds with JSON containing the requested `method` and `url`, read from `req`.
3. `GET /secret` → responds with status `200` and a JSON object containing a made-up "secret" string field.

### 9. Assignment requirements
 
- Must use `res.status().json()` chaining in at least one route.
- Must read at least one property from `req` (`req.method` or `req.url`) and include it in a response.

 
---