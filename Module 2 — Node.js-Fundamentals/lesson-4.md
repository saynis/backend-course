## Lesson 4 — Installing and Running Node.js
 
### 1. Learning objectives
 
- Check that Node.js is installed on your computer.
- Run a `.js` file using the `node` command.
- Use `console.log()` inside a Node.js file and see the output in the terminal.

### 2. Why are we learning this?
 
Knowing *what* Node.js is doesn't help you yet — you need to actually run it. This lesson is where you move from theory to your first real, running piece of backend code.
 
### 3. Concept explanation
 
To run a JavaScript file with Node.js, you use the `node` command in your terminal, followed by the file name:
 
```bash
node app.js
```
 
This tells your computer: "use Node.js to run the code inside `app.js`." Node.js reads the file top to bottom and runs it, just like the browser runs a `<script>` tag — except now there is no HTML page involved at all.
 
To check Node.js is installed, run:
 
```bash
node -v
```
 
This prints the installed version number (for example `v20.11.0`). If you get an error instead, Node.js is not installed yet and needs to be installed from nodejs.org.
 
### 4. Real-world analogy
 
If JavaScript is a script for an actor, the browser and Node.js are two different stages where the same script can be performed. `node app.js` is like telling the "server stage" to start performing the script in `app.js`.
 
### 5. Syntax/code
 
```bash
# check node is installed
node -v
 
# run a file
node app.js
```
 
```js
// app.js
console.log("Hello from Node.js!");
```
 
### 6. Practical example
 
Create a file called `app.js` with:
 
```js
const name = "Student";
console.log(`Hello, ${name}! This is running in Node.js, not the browser.`);
```
 
Run it:
 
```bash
node app.js
```
 
Output in your terminal:
 
```text
Hello, Student! This is running in Node.js, not the browser.
```
 
Notice: there is no browser tab, no HTML page — just your terminal printing output directly.
 
### 7. Common beginner mistakes
 
- Forgetting to save the file before running `node app.js` (Node.js runs whatever is saved on disk, not what's shown unsaved in the editor).
- Running `node` from the wrong folder, causing a "file not found" error. Make sure your terminal is in the same folder as the file.
- Expecting a browser window to open. Node.js has no browser — output goes to the terminal.


 
### 8. Assignment
 
Create a file called `intro.js` that:
 
1. Declares a variable with your full name.
2. Declares an array of 3 subjects you are learning.
3. Uses `console.log` to print a greeting sentence using your name.
4. Uses `.forEach()` to print each subject on its own line.

### 9. Assignment requirements
 
- Must use variables, an array, and `.forEach()` (all things you already know from JavaScript).
- Must run successfully with `node intro.js` and print correct output to the terminal.

 
---