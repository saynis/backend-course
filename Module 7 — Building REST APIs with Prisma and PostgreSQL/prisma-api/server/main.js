import express from "express"
const app = express()
import { prisma } from "../src/lib/prisma.ts"


app.get("/", (req, res) => {
    res.json({ message: "welcome to our server" })
})


app.get("/students", async (req, res) => {

    try {
        const students = await prisma.students.findMany()

        res.status(200).json({
            message: "waad heshay hambalyo",
            students
        })
    } catch (error) {
       res.status(500).json({
        message: "fadlan khalad baa jira"
       })
    }
})




app.listen(3000, () => {
    console.log("http://localhost:3000")
})