
## Lesson 3 — What Is Node.js?
 
### 1. Learning objectives
 
- Explain what Node.js is and why it was created.
- Explain the difference between JavaScript in the browser and JavaScript in Node.js.
- Understand that Node.js lets us use JavaScript to build backends.

### 2. Why are we learning this?
 
Until now, every line of JavaScript you've written has run inside a browser. A browser gives JavaScript special tools: `document`, `window`, `localStorage`, DOM events. But a server is not a browser — there is no page, no DOM, no user clicking buttons. Node.js is what lets JavaScript run in that different environment, outside the browser, so we can use it to build servers.
 
### 3. Concept explanation
 
**Node.js** is a JavaScript runtime — a program that can run JavaScript code outside of a web browser, directly on a computer or server.
 
Before Node.js existed (it was released in 2009), JavaScript could only run inside browsers. If you wanted to build a backend, you had to use a completely different language (like PHP, Java, or Python). Node.js changed that: it took the same JavaScript engine that powers Google Chrome (called V8) and made it runnable on its own, without a browser around it.
 
This means: the JavaScript syntax you already know — variables, functions, objects, arrays, `map`/`filter`/`reduce`, `async`/`await` — is exactly the same in Node.js. What's different is the *environment* around it.
 
| In the browser | In Node.js |
|---|---|
| Has `document`, `window` | Does not have `document` or `window` |
| Can manipulate a webpage (DOM) | Has no webpage to manipulate |
| Can use `localStorage` | Does not have `localStorage` |
| Runs when a user opens a page | Runs continuously as a program (like a server) |
| Has `fetch()` for making requests | Has tools for *handling* incoming requests |
 
### 4. Real-world analogy
 
Think of JavaScript as a language you speak, and the browser as one *room* you've only ever spoken it in. Node.js is a different room — the "server room" — where the same language works, but the furniture (the built-in tools) is different.
 
### 5. Syntax/code
 
No code yet in this lesson — we install and run Node.js in the next lesson.
 
### 6. Practical example
 
Code you already know, that works exactly the same in Node.js:
 
```js
const students = ["Amal", "Khadar", "Faisal"];
const names = students.map(s => s.toUpperCase());
console.log(names);
```
 
This runs in Node.js exactly like it runs in the browser console — because `map`, `console.log`, and basic JavaScript are part of the language itself, not the browser.
 
### 7. Common beginner mistakes
 
- Thinking Node.js is "a different programming language." It isn't — it's still JavaScript, just running in a different place.
- Expecting `document.querySelector` or `localStorage` to work in Node.js. They will not, because those belong to the browser, not to JavaScript itself.

 
### 8. Assignment
 
Write short answers:
 
1. What is Node.js, in your own words?
2. Name two things available in the browser that are NOT available in Node.js, and explain why.
3. Why do you think it was useful for developers that JavaScript could finally run outside the browser?
### 9. Assignment requirements
 
- Answers in your own words.
- Question 2 must name real browser-only features (not guesses).

 
---