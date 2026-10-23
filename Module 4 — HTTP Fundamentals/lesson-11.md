## Lesson 11 — HTTP Methods and Status Codes
 
### 1. Learning objectives
 
- Name the 5 main HTTP methods and what each is used for.
- Explain what an endpoint is.
- Recognize common status codes and what they mean.

### 2. Why are we learning this?
 
So far, every route you've written has used GET, without really discussing why. Real APIs use different methods to mean different *intentions* — asking for data is different from creating, changing, or deleting it. This lesson gives you the vocabulary you need before building full CRUD routes in Module 7.
 
### 3. Concept explanation
 
**HTTP** (HyperText Transfer Protocol) is the agreed-upon "language" that clients and servers use to talk to each other over the web. Every request has a **method**, which states the *intention* of the request, and a **URL**, which states *what* it's about.
 
An **endpoint** is a specific combination of a method and a path — for example, `GET /students` is one endpoint, and `POST /students` is a *different* endpoint, even though the path is the same.
 
| Method | Meaning | Example |
|---|---|---|
| GET | Give me data | `GET /students` → give me all students |
| POST | Create new data | `POST /students` → create a new student |
| PUT | Replace existing data completely | `PUT /students/3` → replace student 3 entirely |
| PATCH | Update part of existing data | `PATCH /students/3` → update just one field of student 3 |
| DELETE | Remove data | `DELETE /students/3` → delete student 3 |
 
**Status codes** are numbers the server sends back to describe how the request went. The most important ones for this course:
 
| Code | Meaning |
|---|---|
| 200 | OK — success |
| 201 | Created — something new was successfully created |
| 400 | Bad Request — the client sent something wrong |
| 404 | Not Found — the requested thing doesn't exist |
| 500 | Server Error — something broke on the server's side |
 
### 4. Real-world analogy
 
```text
GET    → "Show me the menu" (just looking)
POST   → "Add a new dish to the menu"
PUT    → "Replace this entire dish with a new one"
PATCH  → "Just change the price of this dish"
DELETE → "Remove this dish from the menu"
```
 
### 5. Syntax/code
 
No new syntax in this lesson — this lesson is vocabulary and concepts you will apply starting in Module 6 and Module 7.
 
### 6. Practical example
 
```text
GET    /products         → list all products
GET    /products/12      → get product with id 12
POST   /products         → create a new product
PUT    /products/12      → replace product 12 completely
PATCH  /products/12      → update part of product 12 (e.g. just the price)
DELETE /products/12      → delete product 12
```
 
### 7. Common beginner mistakes
 
- Using GET for actions that change data (like deleting something) — GET should only ever be used to *read* data, never to change it.
- Confusing PUT and PATCH — PUT replaces the *whole* resource; PATCH changes only *part* of it.
- Assuming 404 always means "the whole website is broken" — it specifically means "this particular thing was not found," which is very different from a 500 error.

 
### 8. Assignment
 
Write short answers:
 
1. Explain, in your own words, the difference between PUT and PATCH, using a non-code example.
2. For a `GET /orders/7` request, list two possible status codes the server might return, and explain what each would mean in that context.
3. Why is it considered bad practice to use GET to delete something?

### 9. Assignment requirements
 
- Must correctly distinguish PUT vs PATCH.
- Must correctly connect status codes to realistic scenarios.

 
---