## Lesson 5 — Node.js Modules (ES Modules)
 
### 1. Learning objectives
 
- Explain why code is split into multiple files.
- Use `export` to share code from a file.
- Use `import` to bring code from another file.
- Explain what `"type": "module"` does and why we need it.
- Explain named exports versus default exports.

### 2. Why are we learning this?
 
Real backend projects are never one giant file. As soon as your project grows past a few lines, you need a way to split code across files and reuse it — the same instinct you already have from splitting a React app into components. You already did this in React with `import` and `export`. Node.js uses the same syntax, with a few small differences you need to know.
 
### 3. Concept explanation
 
A **module** is simply a JavaScript file. Every file is its own module — its variables and functions are private to that file, unless you explicitly `export` them.
 
- `export` — says "this file makes this thing available to other files."
- `import` — says "give me that thing from that file."
Node.js supports two module systems. An older one called CommonJS (`require()` and `module.exports`) and the modern one called **ES Modules** (`import` and `export`). You may see `require()` in older tutorials. **In this course we only use ES Modules**, because it is the modern standard, and it is exactly what you already know from React.
 
**Why do we need `"type": "module"`?**
For historical reasons, Node.js treats `.js` files as the older CommonJS style by default. To tell Node.js "the `.js` files in this project use `import`/`export`," we add one setting to a small settings file called `package.json`. You will learn what `package.json` is fully in the next lesson — for now, just treat it as the project's settings file and create it by hand, as shown below.
 
**Why do relative imports start with `./` and end with `.js`?**
 
- `./` means "in the same folder as this file." Without it, Node.js thinks you are asking for an installed package, not your own file. (`../` means "one folder up.")
- In React, Vite quietly adds the `.js`/`.jsx` for you. Node.js does **not** guess — you must write the full file name, including `.js`.
**Named exports vs default exports** (same rules as React):
 
| Type | Export | Import |
|---|---|---|
| Named (many per file) | `export function add() {}` | `import { add } from "./math.js";` — braces, exact same name |
| Default (one per file) | `export default students;` | `import students from "./students.js";` — no braces, any name you like |
 
### 4. Real-world analogy
 
Think of each file as a room in a house. By default, what's inside a room stays in that room. `export` puts an item outside the door so people from other rooms can pick it up. `import` is walking to that door and picking the item up.
 
### 5. Syntax/code
 
**Setup (once per project):** create a folder, and inside it create a file named `package.json` with exactly this content:
 
```json
{
  "type": "module"
}
```
 
**Named export and import:**
 
```js
// math.js
export function add(a, b) {
  return a + b;
}
```
 
```js
// app.js
import { add } from "./math.js";
 
console.log(add(2, 3)); // 5
```
 
Line by line: `export` in front of the function makes it available outside `math.js`. In `app.js`, `{ add }` must match the exported name exactly, `"./math.js"` is the path to the file (same folder, with the extension).
 
**Several named exports from one file:**
 
```js
// helpers.js
export function greet(name) {
  return `Hello, ${name}`;
}
 
export function shout(text) {
  return text.toUpperCase();
}
```
 
```js
// app.js
import { greet, shout } from "./helpers.js";
 
console.log(greet("Amal"));
console.log(shout("welcome"));
```
 
**Default export:**
 
```js
// students.js
const students = ["Amal", "Khadar", "Faisal"];
 
export default students;
```
 
```js
// app.js
import students from "./students.js";
 
students.forEach(s => console.log(s));
```
 
### 6. Practical example
 
A small project with this shape:
 
```text
my-project/
├── package.json     ← contains { "type": "module" }
├── students.js
└── app.js
```
 
Run it with `node app.js`. This is the exact pattern you will use later to split routes, data, and logic into separate files.
 
### 7. Common beginner mistakes
 
| Error message | Cause | Fix |
|---|---|---|
| `SyntaxError: Cannot use import statement outside a module` | Missing `"type": "module"` in `package.json` (or `package.json` is in the wrong folder) | Add `{ "type": "module" }` to `package.json` in the project folder |
| `ERR_MODULE_NOT_FOUND` for your own file | Forgot `.js` (`"./math"`), or the path is wrong | Write `"./math.js"` with the correct path |
| `Cannot find package 'students'` | Forgot `./` at the start of the path | Write `"./students.js"` |
| `does not provide an export named ...` | Used `{ }` for a default export, or the name does not match the named export | Default → no braces; named → braces and exact name |
| `require is not defined in ES module scope` | Used old `require()` syntax in a project that uses ES Modules | Replace with `import` |
 
### 8. Mini practice
 
Create a project folder with a `package.json` (type module), then two files: `greetings.js` that exports a function `sayHello(name)`, and `app.js` that imports it and calls it with your name.
 
### 9. Assignment
 
Create a small multi-file project:
 
1. `package.json` — contains `"type": "module"`.
2. `data.js` — uses a **default export** to export an array of at least 4 objects, each representing a "book" with `title` and `author` properties.
3. `utils.js` — uses a **named export** to export a function `getTitles(books)` that uses `.map()` to return just the titles.
4. `app.js` — imports both files, calls `getTitles`, and logs the result.
### 10. Assignment requirements
 
- Must use `export default` in `data.js` and a named `export` in `utils.js`.
- Must use `import` correctly in `app.js` (with `./` and `.js` in both paths).
- Must reuse the `.map()` knowledge you already have from JavaScript.
### 11. Restrictions
 
- Do not use `require()` or `module.exports` — this course uses ES Modules only.
- Do not use npm packages yet.
### 12. Expected result
 
Running `node app.js` prints an array of book titles pulled from `data.js` using the function from `utils.js` — proving your files are correctly connected through `import`/`export`.
 
---
 
