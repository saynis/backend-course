## Lesson 1 — What Is Frontend? What Is Backend?
 
### 1. Learning objectives
 
By the end of this lesson, you should be able to:
 
- Explain the difference between frontend and backend.
- Explain why a website usually needs both.
- Describe what happens when a browser loads a webpage.

### 2. Why are we learning this?
 
You have spent your entire journey so far in the frontend world: HTML, CSS, JavaScript, React. All of that runs **inside the user's browser**. But real applications — Instagram, Amazon, your school's student portal — do more than display things. They store data, check passwords, calculate totals, and remember information even after you close the tab. None of that can happen safely or permanently in the browser alone. That's what backend is for.
 
### 3. Concept explanation
 
**Frontend** is everything the user directly sees and interacts with: the layout, the colors, the buttons, the forms, the animations. It runs on the user's device, inside their browser.
 
**Backend** is everything that runs on a separate machine (a "server"), out of the user's sight. It stores data, applies business rules, checks who is allowed to do what, and sends information back to the frontend when asked.
 
Think about a student portal where you log in and see your grades:
 
- The frontend is the login page, the grade table, the buttons.
- The backend is the part that checks your password is correct, looks up your grades in storage, and sends them back as data.
The frontend **never** directly touches the stored data. It always asks the backend for it.
 
### 4. Real-world analogy
 
```text
Restaurant analogy
 
Client       → Customer
Request      → Customer's order
Server       → Kitchen
Route        → Counter / order station
Response     → Food returned to customer
Database     → Storage room
API          → Waiter between customer and kitchen
```
 
You (the customer/frontend) never walk into the kitchen (server) yourself. You give your order (request) to the waiter (API), the kitchen prepares it (backend logic), and the waiter brings back your food (response).
 
### 5. Syntax/code
 
No code in this lesson. This lesson is entirely conceptual — understanding must come before syntax.
 
### 6. Practical example
 
When you open Instagram and see your feed of photos:
 
1. Your phone (frontend/client) asks a server: "give me the latest posts for this user."
2. The server (backend) looks up the posts.
3. The server sends the posts back as data.
4. Your frontend takes that data and displays it as a feed.


### 7. Common beginner mistakes
 
- Thinking "backend" means "anything complicated." Backend has a specific meaning: code that runs on a server, not in the browser.
- Thinking frontend and backend must be written in the same language. They don't — but in this course, we use JavaScript for both, which is one reason Node.js exists.


 
### 8. Assignment
 
Write short answers (a few sentences each) to:
 
1. What is the difference between frontend and backend?
2. Why can't a browser safely store everyone's passwords by itself?
3. Pick one app you use and describe, in your own words, what you think happens on the backend when you open it.

### 9. Assignment requirements
 
- Answers must be in your own words, not copied definitions.
- Use at least one real example from an app you actually use.

---