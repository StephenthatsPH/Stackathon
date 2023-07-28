import express from "express"
import axios from "axios"
import dotenv from "dotenv"
import { openai } from "../index"

dotenv.config()
const router = express.router()

router.post("/text", async (req, res) => {
    try {
        const { text, activeChatId } = req.body;
    } catch (error) {
        console.error("Error", error)
        res.status(500).json({ error: error.message })
    }
})

export default router