# 🔥 Redis_LABs

Welcome to **Redis_LABs** – your go-to developer lab for learning and experimenting with Redis from scratch to production-ready use cases 🚀

---

## 📚 What’s Inside?

```
Redis_LABs/
├── README.md
├── cli-practice/       # Redis CLI commands and examples
├── nodejs-redis/       # Using Redis with Node.js
├── mini-projects/      # Small real-world Redis-based projects
└── screenshots/        # CLI screenshots, outputs, visuals
```

---

## 🧪 Redis CLI Practice

Explore and practice core Redis concepts directly from the terminal:

- ✅ `SET`, `GET`, `DEL`
- ⏱️ `EXPIRE`, `TTL`
- 🧮 `INCR`, `DECR`
- 📜 `LIST`, `SET`, `ZSET`
- 🔐 `HASH` (like storing user info)
- 🗑️ `FLUSHALL`, `KEYS *`, `EXISTS`

---

## ⚙️ Redis + Node.js

Integration examples using the official `redis` package:

- Connect Redis with Node.js
- Perform basic operations (`get/set`)
- Implement TTL and caching strategies

---

## 🚧 Mini Projects

- 🔐 OTP system with Redis expiry
- 📈 Leaderboard using Sorted Sets (`ZADD`, `ZRANGE`)
- 🔄 Rate limiter using Redis key expiry
- 🧠 Session store prototype

---

## 🚀 How to Run Redis using Docker

```bash
docker pull redis
docker run --name my-redis -p 6379:6379 -d redis
docker exec -it my-redis redis-cli
```

---

## 🙌 Contributing / Notes

This is a personal lab built by **@Ankit** 🧠 for learning and revising Redis.
Feel free to fork, star ⭐, or contribute cool examples.

---

## 🧠 Useful Commands Cheatsheet

```bash
SET key "value"
GET key
DEL key
EXPIRE key 60
TTL key
INCR key
LPUSH list val
HSET hash field value
ZADD zset score member
```