## Lesson 7 — What Does a Server Actually Do?
 
### 1. Learning objectives
 
- Explain what "listening" means for a server.
- Explain what a port and `localhost` are.
- Understand that a server is a program that runs continuously, waiting for requests.

### 2. Why are we learning this?
 
Before writing server code, you need the right mental picture, or the code in the next lesson will feel like magic. A server is not a one-time script that runs and finishes (like the files you've written so far) — it's a program that starts and then stays alive, waiting.
 
### 3. Concept explanation
 
A **server**, in the backend sense, is a program that:
 
1. Starts running.
2. "Listens" for incoming requests.
3. When a request arrives, handles it and sends back a response.
4. Then goes back to waiting — it does not stop after one request.
**Listening** means the program is actively watching for incoming connections, the same way a phone left on is "listening" for calls, even when no one is calling right now.
 
A **port** is a number that identifies *which* program on a computer should receive a given request. One computer can run many programs at once (a web server, a game server, etc.) — the port number tells incoming requests which one to talk to. Common example: port `3000`.
 
**`localhost`** means "this same computer." When you're developing, your server runs on your own machine, and you (as the client) also access it from the same machine — so you use the address `localhost` (or `127.0.0.1`) instead of a real internet address.
 
Put together: `http://localhost:3000` means "talk to the program listening on port 3000, on this same computer."
 
### 4. Real-world analogy
 
A server "listening" on a port is like a specific phone line in a building. `localhost` is "this building." The port number is "which phone line to ring" — reception (port 80), sales (port 3000), etc. The phone doesn't hang up after one call; it keeps waiting for the next one.
 
### 5. Syntax/code
 
No new code in this lesson — we build the actual server in Lesson 8, now that the concept is clear.
 
### 6. Practical example
 
```text
Your computer
 ┌───────────────────────────┐
 │  Server program            │
 │  listening on port 3000    │
 └───────────────────────────┘
        ▲
        │ request to localhost:3000
        │
 ┌───────────────────────────┐
 │  Browser / React app       │
 │  (client)                  │
 └───────────────────────────┘
```
 
### 7. Common beginner mistakes
 
- Thinking the server "runs once and stops," like the scripts from Module 2. A real server keeps running until you stop it.
- Confusing a port number with a website address — a port is just a number identifying a program on one machine, not a domain name.

 
### 8. Assignment
 
Write short answers:
 
1. In your own words, what does it mean for a server to "listen" on a port?
2. Why do we use `localhost` while developing, instead of a real website address?
3. If two different programs both tried to listen on port `3000` at the same time on your computer, what do you think would happen? (Guess, then explain your reasoning.)

### 10. Assignment requirements
 
- Answers in your own words, based on the lesson's explanation.
 
---