## Lesson 14 — Reading the Request Body
 
### 1. Learning objectives
 
- Explain what a request body is and when it's used.
- Enable Express to read JSON request bodies using `express.json()`.
- Read data sent by the client using `req.body`.

### 2. Why are we learning this?
 
GET requests fetch data using the URL alone. But POST, PUT, and PATCH requests need to send actual *data* to the server — for example, the details of a new student being created. That data travels in the **request body**, not the URL. This lesson is the final piece you need before building full CRUD APIs in Module 7.
 
### 3. Concept explanation
 
The **request body** is data attached to a request, separate from the URL — commonly sent as JSON when talking to a JSON API (which is what React's `fetch()` does when you pass a `body` and `Content-Type: application/json` header).
 
By default, Express does **not** automatically read the body of incoming requests — you must explicitly tell it to, using a built-in piece of Express called `express.json()`. For now, think of this as a required setup line; the deeper concept of *why* it's called "middleware" and how middleware works in general is taught fully in Module 8.
 
```js
app.use(express.json());
```
 
Once this line is added (usually right after creating `app`), every route can read incoming JSON data through `req.body`.
 
### 4. Syntax/code
 
```js
import express from "express";
const app = express();
 
app.use(express.json());
 
app.post("/students", (req, res) => {
  const newStudent = req.body;
  res.status(201).json({ message: "Received!", student: newStudent });
});
```
 
### 5. Practical example
 
```js
import express from "express";
const app = express();
 
app.use(express.json());
 
let books = [];
 
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});
 
app.get("/books", (req, res) => {
  res.json(books);
});
 
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```
 
Using Postman, send a `POST` request to `/books` with a JSON body like `{ "title": "1984", "author": "George Orwell" }`, and a `Content-Type: application/json` header — the response will confirm the book was created and added to the array.
 
### 6. Common beginner mistakes
 
- Forgetting `app.use(express.json())` entirely — `req.body` will then be `undefined`, and destructuring it will throw an error.
- Forgetting to set the `Content-Type: application/json` header in Postman when testing — without it, Express may not parse the body correctly.
- In Express 5, `req.body` is `undefined` when a request arrives with no body. Destructuring it (`const { title } = req.body`) then throws an error. A safe habit is `const { title } = req.body ?? {};`.
- Trying to read `req.body` inside a GET route — GET requests are not meant to carry a body; this pattern is only for POST/PUT/PATCH.

### 7. Mini practice
 
Add basic validation: if `title` or `author` is missing from `req.body`, respond with status `400` and an error message instead of creating the book.
 
### 8. Mini practice (continued)
 
Test sending a POST request with an empty body `{}` and confirm your validation catches it correctly.
 
### 9. Assignment
 
Using an in-memory array of "notes" (starts empty):
 
1. `app.use(express.json())` set up correctly.
2. `POST /notes` → reads `title` and `content` from `req.body`, creates a new note object with a generated `id`, pushes it into the array, and responds with status `201` and the created note.
3. If `title` or `content` is missing, respond with status `400` and a clear error message instead of creating anything.
4. `GET /notes` → returns the full array of notes created so far.

### 10. Assignment requirements
 
- Must correctly set up `express.json()`.
- Must correctly destructure and validate `req.body`.
- Must generate a unique `id` for each new note (e.g. using the current array length + 1, or a simple counter).

---