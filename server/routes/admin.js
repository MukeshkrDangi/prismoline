import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "password123";
const SECRET = process.env.JWT_SECRET || "supersecret";

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ role: "admin" }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }
  return res.status(401).json({ error: "Invalid credentials" });
});

export default router;
