## Lesson 12 — Routes and Route Paths
 
### 1. Learning objectives
 
- Define multiple routes for different paths and methods.
- Use `app.get()` and `app.post()` together in one server.
- Understand that a route is a combination of method + path.

### 2. Why are we learning this?
 
You've written GET routes already. Now we officially introduce other methods and reinforce that a "route" always means method + path together, setting you up for full CRUD routing in Module 7.
 
### 3. Concept explanation
 
A **route** in Express is defined by calling a method function on `app` (like `app.get`, `app.post`) with a path and a handler function:
 
```js
app.METHOD(path, handler);
```
 
Each combination is treated as a completely separate route by Express — `GET /students` and `POST /students` can have entirely different handler functions, even though the path string is identical.
 
### 4. Syntax/code
 
```js
app.get("/students", (req, res) => {
  res.json({ message: "This returns the list of students (GET)" });
});
 
app.post("/students", (req, res) => {
  res.status(201).json({ message: "This would create a new student (POST)" });
});
```
 
### 5. Practical example
 
```js
import express from "express";
const app = express();
 
app.get("/books", (req, res) => {
  res.json({ message: "GET all books" });
});
 
app.post("/books", (req, res) => {
  res.status(201).json({ message: "POST — create a new book" });
});
 
app.delete("/books", (req, res) => {
  res.json({ message: "DELETE books (example only)" });
});
 
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```
 
You can only truly test POST/DELETE routes properly using a tool like Postman/Insomnia or `curl`, since typing a URL in the browser address bar always sends a GET request. We'll rely on such a tool from this lesson onward.
 
### 6. Common beginner mistakes
 
- Typing a POST route's URL into the browser address bar and being confused it doesn't trigger — browsers only send GET requests that way. Use Postman, Insomnia, or `curl` for other methods.
- Defining two `app.get()` routes for the exact same path — only the first one Express finds will ever run.

### 7. Mini practice
 
Add a `PATCH /books` route (for practice only, no real logic yet) that returns a JSON message confirming it was reached.
 
### 8. Mini practice (continued)
 
Using Postman or a similar tool, send a GET and then a POST request to `/books` and confirm you get two different responses.
 
### 9. Assignment
 
Build an Express server with a `/tasks` resource that has:
 
1. `GET /tasks` → returns JSON message describing this is the "list tasks" endpoint.
2. `POST /tasks` → returns status `201` and a JSON message describing this is the "create task" endpoint.
3. `DELETE /tasks` → returns a JSON message describing this is the "delete task" endpoint.
Test all three using Postman (or similar) and take note of what method you used for each.
 
### 10. Assignment requirements
 
- Must correctly separate the three methods on the same `/tasks` path.
- POST route must return status `201`.
 
---