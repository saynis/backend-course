## Lesson 15 — Why a Database? What Are Prisma ORM and Prisma Client?
 
### 1. Learning objectives
 
- Explain why an in-memory array is not enough for a real backend.
- Explain what an ORM is.
- Explain the three parts of Prisma ORM: the schema, migrations, and Prisma Client.
- Explain how Prisma Client relates to PostgreSQL.
### 2. Why are we learning this?
 
Before installing anything, you need to know *what* you are about to install and *why*. Otherwise the setup commands in the next lessons will feel like magic spells.
 
### 3. Concept explanation
 
**The problem with arrays.** Your in-memory `students` array disappears every time the server restarts, and it cannot be shared safely between several servers. A **database** stores data permanently on disk. You already know PostgreSQL from your database course: tables, rows, columns, SQL.
 
**The new problem.** Your Express code is JavaScript. PostgreSQL speaks SQL. Someone has to translate between them. You could write SQL strings inside your routes:
 
```js
// We will NOT do this in this course for ordinary CRUD
const result = await db.query("SELECT * FROM students WHERE id = " + id);
```
 
This is easy to get wrong (typos, and dangerous security mistakes). An **ORM** (Object-Relational Mapper) solves this by letting you work with the database using normal JavaScript objects and functions.
 
**Prisma ORM** has three parts:
 
| Part | What it is | File / command |
|---|---|---|
| **Prisma schema** | A file where you *describe* your data (models) | `prisma/schema.prisma` |
| **Prisma Migrate** | Applies your schema changes to the real database | `npx prisma migrate dev` |
| **Prisma Client** | JavaScript code that Prisma *generates* for you, used in Express to read and write data | `import { PrismaClient } ...` |
 
**Important:** Prisma Client does **not** replace PostgreSQL. PostgreSQL still stores the data. Prisma Client is the messenger between your Express code and PostgreSQL, and it creates the SQL for you.
 
### 4. Real-world analogy
 
```text
Restaurant analogy
 
Express route      → Waiter
Prisma Client      → Order form with fixed boxes (you tick boxes; you don't write the kitchen's language)
PostgreSQL         → Storage room / kitchen
Prisma schema      → The menu that lists exactly what exists
Migration          → Building or changing the shelves in the storage room
```
 
### 5. Syntax/code
 
Here is how the same actions look in SQL (which you know) and in Prisma Client (which you will learn). Do not memorize this yet — just notice that they match.
 
| Action | SQL | Prisma Client |
|---|---|---|
| Get all | `SELECT * FROM "Student";` | `prisma.student.findMany()` |
| Get one | `SELECT * FROM "Student" WHERE id = 1;` | `prisma.student.findUnique({ where: { id: 1 } })` |
| Create | `INSERT INTO "Student" (...) VALUES (...);` | `prisma.student.create({ data: {...} })` |
| Update | `UPDATE "Student" SET ... WHERE id = 1;` | `prisma.student.update({ where: {...}, data: {...} })` |
| Delete | `DELETE FROM "Student" WHERE id = 1;` | `prisma.student.delete({ where: { id: 1 } })` |
 
### 6. Practical example
 
```text
React                                  Express + Prisma                 PostgreSQL
-----                                  ----------------                 ----------
fetch("/students")  ───────────────►   app.get("/students", ...)
                                        prisma.student.findMany()  ───►  SELECT ... FROM "Student"
                                                                   ◄───  rows
                     ◄───────────────   res.json(students)
students appear on screen
```
 
### 7. Common beginner mistakes
 
- Thinking Prisma is a database. It is not — PostgreSQL is the database.
- Thinking the schema file *creates* the tables by itself. The schema only *describes* the data; a **migration** applies it to the database (Lesson 20).
- Thinking an ORM means you never need SQL. You still use SQL knowledge to understand what is happening, and to inspect your database with `psql`.

### 8. Mini practice
 
Look at the SQL/Prisma table above. For each row, say out loud which HTTP method (GET, POST, PUT/PATCH, DELETE) you would use in an Express route for that action.
 
### 9. Assignment
 
Write short answers in your own words:
 
1. Give two reasons why an in-memory array is not enough for a real backend.
2. What is an ORM, and what problem does it solve?
3. Name the three parts of Prisma ORM and say what each one does.
4. In one or two sentences: how are Prisma Client and PostgreSQL different?

### 10. Assignment requirements
 
- Answers in your own words, not copied.
- Question 3 must mention schema, migrations, and Prisma Client.

 
---