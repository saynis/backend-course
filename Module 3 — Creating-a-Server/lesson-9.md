## Lesson 9 — Creating Your First Express Server
 
### 1. Learning objectives
 
- Create an Express application using `express()`.
- Start the server with `app.listen()`.
- Create your first route using `app.get()`.

### 2. Why are we learning this?
 
This is the lesson where Express finally starts feeling powerful — you'll recreate what took real effort in Lesson 8, but shorter and cleaner, and you'll be able to add more routes almost effortlessly.
 
### 3. Concept explanation
 
`express()` creates an **application object**, usually stored in a variable called `app`. This `app` object is what you use for everything: defining routes, starting the server, and more.
 
`app.listen(port, callback)` starts the server, exactly like `server.listen()` did with the raw `http` module in Lesson 8 — Express is built on top of that same mechanism.
 
`app.get(path, handler)` defines a **route**: "when a GET request arrives at this path, run this handler function." The handler function receives the same two objects you already met in Lesson 8: `req` and `res` — except now `res` has extra convenient methods, like `res.json()`.
 
### 4. Syntax/code
 
```js
import express from "express";
const app = express();
 
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});
 
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```
 
Compare this to Lesson 8's raw version — notice there's no manual `JSON.stringify()`, no manual status code setting for a simple success response; `res.json()` handles that for you.
 
### 5. Practical example
 
```js
import express from "express";
const app = express();
 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the homepage" });
});
 
app.get("/about", (req, res) => {
  res.json({ message: "This is the about page" });
});
 
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```
 
Visit `http://localhost:3000/` and `http://localhost:3000/about` — notice each URL now returns something *different*, something that was painful to do manually in Lesson 8.
 
### 6. Common beginner mistakes
 
- Forgetting to call `express()` and using `express` (the whole module) directly instead of `app`.
- Forgetting `app.listen()` — without it, the server never actually starts.
- Forgetting `"type": "module"` in `package.json` when using `import express from "express"`.
- Defining a route with the wrong path spelling (`/About` vs `/about`) — Express route paths are case-sensitive.
### 7. Mini practice
 
Add a third route, `/contact`, that returns a JSON object with an `email` field.
 
### 8. Mini practice (continued)
 
Try visiting a URL you did **not** define a route for (like `/random`). Observe what Express does by default (it should show a basic "Cannot GET /random" message) — this is a preview of error handling, covered properly in Module 9.
 
### 9. Assignment
 
Create an Express server (`server.js`) with:
 
1. `GET /` → returns a welcome JSON message.
2. `GET /courses` → returns a JSON array of at least 3 course names you're studying.
3. `GET /instructor` → returns a JSON object with your name and role as "instructor" or "student" (your choice, for practice).
4. The server must listen on port `3000` and log a startup message.

### 10. Assignment requirements
 
- Must use `express()`, `app.get()`, and `app.listen()`.
- Must return valid JSON from every route using `res.json()`.
- All three routes must return genuinely different content.

---