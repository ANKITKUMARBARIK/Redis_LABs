import express from "express";
import { Redis } from "ioredis";
import axios from "axios";

const app = express();
const PORT = 8000;

const redisClient = new Redis(); // redis client

app.get("/", async (req, res) => {
    try {
        // Check if data is in cache
        const cacheValue = await redisClient.get("todos");
        if (cacheValue) return res.status(200).json(JSON.parse(cacheValue));

        // Fetch from API
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/"
        );

        // Store in Redis cache with expiry of 20 sec
        await redisClient.setex("todos", 20, JSON.stringify(data));

        return res.status(200).json(data);
    } catch (err) {
        console.log("Error fetching data:", err);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(PORT, () => console.log(`Server is started at PORT: ${PORT}`));
