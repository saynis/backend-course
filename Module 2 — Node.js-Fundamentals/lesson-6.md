## Lesson 6 — npm, package.json, and Dependencies
 
### 1. Learning objectives
 
- Explain what npm is and why it exists.
- Create a `package.json` file using `npm init`.
- Turn on ES Modules in `package.json` using `"type": "module"`.
- Install a package and understand `node_modules` and `dependencies`.

### 2. Why are we learning this?
 
So far we've only used JavaScript's own built-in features. But almost every real backend project uses code that other developers already wrote and shared — like Express itself, which we install in Module 4. npm is the tool that lets us download and manage that shared code.
 
### 3. Concept explanation
 
**npm** (Node Package Manager) comes installed automatically with Node.js. It does two main jobs:
 
1. Lets you install **packages** (reusable code written by other developers) into your project.
2. Keeps track of which packages your project depends on, using a file called `package.json`.
**`package.json`** is a file that describes your project: its name, version, and — most importantly — its **dependencies** (the list of packages it needs to run).
 
When you install a package, npm downloads its code into a folder called **`node_modules`**. This folder can get very large and is never uploaded to GitHub or shared manually — that's exactly why `package.json` exists: it lists *which* packages are needed, so anyone can run `npm install` and get the same `node_modules` back.
 
### 4. Real-world analogy
 
`package.json` is like a shopping list for your project ("this project needs these 3 ingredients"). `npm install` is going to the store and buying everything on that list. `node_modules` is your pantry, full of the actual ingredients.
 
### 5. Syntax/code
 
```bash
# create a package.json file (answer the prompts, or use -y for defaults)
npm init -y
 
# turn on ES Modules (import/export) without touching the other fields
npm pkg set type=module
```
 
(In Lesson 5 you wrote `"type": "module"` by hand. `npm pkg set type=module` adds the same line for you. You can also open `package.json` and type it yourself.)
 
```bash
# install a package and save it as a dependency
npm install some-package-name
```
 
Example `package.json` after installing a package:
 
```json
{
  "name": "my-backend-project",
  "version": "1.0.0",
  "main": "app.js",
  "type": "module",
  "dependencies": {
    "some-package-name": "^1.2.3"
  }
}
```
 
### 6. Practical example
 
```bash
mkdir my-project
cd my-project
npm init -y
npm pkg set type=module
npm install chalk@5
```
 
```js
// app.js
import chalk from "chalk";
 
console.log(chalk.green("This text is green, thanks to an npm package!"));
```
 
Notice: `chalk` was never written by you, yet `import chalk from "chalk"` works — because it now lives inside `node_modules`, and is listed in `package.json`. Also notice there is no `./` in front of `"chalk"`: no `./` means "an installed package," which is exactly what this is.
 
**Version note:** this course uses **chalk 5** (`npm install chalk@5`). Chalk 5 only supports ES Modules — a perfect match for our `"type": "module"` projects. Chalk 4 and older were written for `require()`. Newer chalk versions (6 and above) need a newer Node.js than this course assumes, so we pin version 5 to keep every student's setup identical. The `@5` part means "install version 5.x."
 
### 7. Common beginner mistakes
 
- Deleting `node_modules` and being confused when `import` of a package stops working — the fix is simply running `npm install` again, which rebuilds it from `package.json`.
- Forgetting to run `npm init` before `npm install`, causing confusing errors.
- Forgetting `"type": "module"` and getting `Cannot use import statement outside a module` (see Lesson 5).
- Uploading `node_modules` to GitHub — it should always be excluded (using a `.gitignore` file), since `package.json` is enough for anyone to reinstall it.

### 8. Mini practice
 
Create a new folder, run `npm init -y`, then `npm pkg set type=module`. Open the generated `package.json` and identify the `name`, `version`, `main`, and `type` fields.
 
### 9. Assignment
 
1. Create a new project folder and initialize it with `npm init -y`, then enable ES Modules with `npm pkg set type=module`.
2. Install `chalk` version 5 (`npm install chalk@5`).
3. Create an `app.js` that imports `chalk` and prints at least 3 different colored/styled messages (for example, a green success message, a red error message, and a bold message).
4. Open `package.json` and confirm `chalk` appears under `dependencies`.
### 10. Assignment requirements
 
- Must have a valid `package.json` with `"type": "module"` and `chalk` listed as a dependency.
- Must use `import chalk from "chalk"` correctly.
- Must print at least 3 distinct styled outputs.

 
---