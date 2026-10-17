## Lesson 8 — What Is Express.js and Why Use It?
 
### 1. Learning objectives
 
- Explain what Express.js is.
- Explain the problems Express solves compared to the raw `http` module.
- Install Express using npm.

### 2. Why are we learning this?
 
In Lesson 8, you built a server that responds the exact same way no matter what URL is requested. Real APIs need different responses for different URLs (`/students`, `/products`, `/students/5`) and different HTTP methods. Handling all of that manually with the raw `http` module gets messy fast. Express.js is a package that makes this much easier — it is the standard tool almost every Node.js backend developer uses.
 
### 3. Concept explanation
 
**Express.js** is an npm package — a **framework** built on top of Node's `http` module. A framework means it doesn't replace what you learned; it gives you cleaner, more powerful tools to do the same underlying job (handling requests and sending responses), so you write less repetitive code.
 
With raw `http`, you would have to manually check `req.url` and `req.method` with `if`/`else` statements to handle different pages. Express gives you a clean way to say "when a GET request comes to `/students`, run this specific function" — this is called **routing**, and you'll learn it properly starting in Module 6.
 
### 4. Real-world analogy
 
If the raw `http` module is like building a restaurant's ordering system from raw wood and nails, Express is like a pre-built counter system with slots already labeled for "drinks," "food," "takeout" — you still run the restaurant, but you're not reinventing the counter every time.
 
### 5. Syntax/code
 
```bash
npm init -y
npm pkg set type=module
npm install express
```
 
### 6. Practical example
 
After installing, check your `package.json` — you should see:
 
```json
{
  "dependencies": {
    "express": "^5.x.x"
  }
}
```
 
You now have access to `import express from "express";`, which you'll use starting in the next lesson. This course uses **Express 5**, the current version.
 
Also check that `package.json` contains `"type": "module"` (added by `npm pkg set type=module`), so `import` works in your files.
 
### 7. Common beginner mistakes
 
- Trying to `import express from "express"` before running `npm install express` — this causes a `Cannot find package 'express'` error.
- Forgetting `"type": "module"`, which causes `Cannot use import statement outside a module`.
- Forgetting `npm init -y` first, so there's no `package.json` to record the dependency.

### 8. Mini practice
 
Create a new folder, run `npm init -y`, then `npm install express`, and open `package.json` to confirm Express appears under `dependencies`.
 
### 9. Assignment
 
1. Create a new project folder.
2. Initialize it with `npm init -y` and enable ES Modules with `npm pkg set type=module`.
3. Install Express.

### 10. Assignment requirements
 
- Project must have a valid `package.json` with `"type": "module"` and `express` listed as a dependency.


---