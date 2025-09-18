import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// ✅ Save form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.json({ success: true, message: "Form submitted successfully", contact });
  } catch (err) {
    console.error("❌ Contact form error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Get all submissions
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
