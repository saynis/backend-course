## Lesson 13 — Route Parameters
 
### 1. Learning objectives
 
- Define a route with a dynamic parameter (`:id`).
- Read a route parameter using `req.params`.
- Use a route parameter to find one specific item.

### 2. Why are we learning this?
 
Real APIs almost never operate only on a whole collection — you also need to get, update, or delete *one specific* item, like "student number 7." Route parameters are how a URL captures that "which one" information.
 
### 3. Concept explanation
 
A **route parameter** is a named placeholder inside a route path, written with a colon: `:id`. Express captures whatever value appears in that position of the real URL and makes it available on `req.params`.
 
```js
app.get("/students/:id", (req, res) => {
  console.log(req.params.id);
});
```
 
If a client requests `GET /students/5`, then `req.params.id` will be the string `"5"`.
 
### 4. Syntax/code
 
```js
const students = ["Amal", "Khadar", "Faisal"];
 
app.get("/students/:index", (req, res) => {
  const index = Number(req.params.index);
  res.json({ student: students[index] });
});
```
 
### 5. Practical example
 
```js
import express from "express";
const app = express();
 
const books = [
  { id: 1, title: "Atomic Habits" },
  { id: 2, title: "Clean Code" },
  { id: 3, title: "Deep Work" },
];
 
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  res.json({ book });
});
 
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```
 
Visiting `/books/2` returns `{"book":{"id":2,"title":"Clean Code"}}`.
 
### 6. Common beginner mistakes
 
- Forgetting `req.params` values are always **strings**, even if they look like numbers — comparing `req.params.id === 2` (number) will fail; you must convert with `Number(req.params.id)` first, as shown above.
- Misspelling the parameter name between the route definition and `req.params` (e.g. `:id` in the path but `req.params.Id` in code).


### 7. Mini practice
 
Add a route `/books/:id/title` (yes, route params can be followed by more path) that returns just the book's title as a JSON field, using the same `books` array.
 
### 8. Mini practice (continued)
 
Test what happens when you request an `id` that doesn't exist in the array (e.g. `/books/99`) — notice what `res.json({ book })` sends back when `book` is `undefined`.
 
### 9. Assignment
 
Using an in-memory array of at least 4 objects representing "movies" (`id`, `title`, `year`):
 
1. `GET /movies` → returns the full array.
2. `GET /movies/:id` → returns the single movie matching that id.
3. If no movie matches the given id, respond with status `404` and a JSON error message (you learned status codes in Lesson 12 — apply that knowledge here).

### 10. Assignment requirements
 
- Must use `req.params` correctly, including converting to a number for comparison.
- Must return `404` with a clear message when no match is found.

 
---