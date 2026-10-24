## Lesson 19 — Setting Up Prisma 7 and Connecting to PostgreSQL
 
### 1. Learning objectives
 
- Create a project configured for ES Modules, Express 5, and Prisma 7.
- Create a PostgreSQL database and user for the project.
- Store the database connection string safely in a `.env` file.
- Write a `prisma.config.js` file and a starter `prisma/schema.prisma` file.

### 2. Why are we learning this?
 
Prisma needs a small amount of setup: packages, a database to connect to, a secret connection string, and two configuration files. You do this once per project. Each piece has a clear job, and in this lesson you will learn what each job is.
 
### 3. Concept explanation
 
**Packages** (what each one does):
 
| Package | Job |
|---|---|
| `express` | The web server (version 5) |
| `prisma` (dev dependency) | The Prisma **command line tool** (`npx prisma ...`). Only used while developing |
| `@prisma/client` | The runtime code of Prisma Client |
| `@prisma/adapter-pg` | A **driver adapter**: it lets Prisma Client talk to PostgreSQL using the `pg` driver (required in Prisma 7) |
| `pg` | The standard PostgreSQL driver for Node.js |
| `dotenv` | Loads variables from a `.env` file into `process.env` |
 
**Environment variables and `.env`.** Your database password must never be written directly in code or pushed to GitHub. We store it in a file named `.env`, which is listed in `.gitignore` so Git ignores it. Your code reads it with `process.env.DATABASE_URL`.
 
**The connection string** has this shape:
 
```text
postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```
 
**Two Prisma files:**
 
- `prisma/schema.prisma` — describes the generator (where to put Prisma Client), the database type, and (from Lesson 20) your models.
- `prisma.config.js` — settings for the Prisma command line tool, including where to find `DATABASE_URL`. In Prisma 7, the database URL lives here, not in the schema. It does not load `.env` by itself, so we import `dotenv/config` at the top.
### 4. Syntax/code
 
**Step 1 — create the project:**
 
```bash
mkdir school-api
cd school-api
npm init -y
npm pkg set type=module
```
 
**Step 2 — create the database.** Open `psql` as your PostgreSQL admin user and run:
 
```sql

CREATE DATABASE school_api ;
```
 
(`CREATEDB` is needed because `prisma migrate dev` uses a temporary "shadow" database. Use your own password, not `change_me`.)
 
**Step 3 — install the packages (pin the major version!):**
 
```bash
npm install express@5 @prisma/client@7 @prisma/adapter-pg@7 pg dotenv
npm install --save-dev prisma@7
npx prisma init
```
 
The `@7` and `@5` matter. Without them, npm may install a newer major version that works differently from this course.
 
**Step 4 — `.env`, `.env.example`, and `.gitignore`:**
 
```text
# .env  (real secret, never commit)
DATABASE_URL="postgresql://student:change_me@localhost:5432/school_api?schema=public"
```
 
```text
# .env.example  (safe to commit; shows teammates what is needed)
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE?schema=public"
```
 
```text
# .gitignore
node_modules
.env
generated
```
 
**Step 5 — `prisma.config.js`:**
 
```js
import "dotenv/config";
import { defineConfig, env } from "prisma/config";
 
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```
 
Line by line: line 1 loads `.env`. `defineConfig` is a helper from Prisma. `schema` says where the schema file is. `migrations.path` says where migration files will be stored. `datasource.url` reads `DATABASE_URL` from the environment.
 
**Step 6 — `prisma/schema.prisma` (create the `prisma` folder first):**
 
```prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}
 
datasource db {
  provider = "postgresql"
}
```
 
Line by line: `generator client` tells Prisma to generate Prisma Client. `output` is the folder where the generated code goes (a folder named `generated/prisma` in your project root). `datasource db` says our database is PostgreSQL.
 
### 5. Practical example
 
Your project should now look like this:
 
```text
school-api/
├── node_modules/
├── prisma/
│   └── schema.prisma
├── .env
├── .env.example
├── .gitignore
├── package.json
└── prisma.config.js
```
 
Check that Prisma understands your setup:
 
```bash
npx prisma validate
```
 
You should see a message saying the schema is valid.
 
### 6. Common beginner mistakes
 
- Installing without the version (`npm install prisma`) and getting a newer major version than the course uses.
- Forgetting `"type": "module"`, so `import` in `prisma.config.js` fails.
- Forgetting `import "dotenv/config"` in `prisma.config.js`, so `DATABASE_URL` is missing.
- Committing `.env` to GitHub. If a password was ever committed, change the password.
- Special characters in the password (such as `@`, `/`, `:`) breaking the connection string. Use a simple password for learning, or URL-encode it.
- Wrong database name, user, or port in `DATABASE_URL`, or PostgreSQL not running.
### 7. Mini practice
 
Open `psql` using your new user and database: `psql -U student -d school_api -h localhost`. If it connects, your credentials in `.env` are correct.
 
### 8. Assignment
 
Set up a new, empty project folder called `school-api` (as in this lesson) and make it pass `npx prisma validate`.
 
### 9. Assignment requirements
 
- `package.json` has `"type": "module"`, and lists `express`, `@prisma/client`, `@prisma/adapter-pg`, `pg`, `dotenv` as dependencies and `prisma` as a dev dependency, all at the versions pinned in this lesson.
- `.env` exists with a working `DATABASE_URL`; `.env.example` exists with placeholders; `.gitignore` lists `.env`, `node_modules`, and `generated`.
- `prisma.config.js` and `prisma/schema.prisma` exist as shown.

### 10. Restrictions
 
- Do not write any models yet (Lesson 20).
- Do not write Express code yet.
- Do not write your real password in `.env.example` or anywhere that will be committed.

 
---