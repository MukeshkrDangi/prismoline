import express from "express";
import Banner from "../models/Banner.js";
import { protect } from "../middleware/authMiddleware.js";
import fs from "fs/promises";
import path from "path";

const router = express.Router();

// ✅ GET all banners (public)
router.get("/", async (req, res) => {
  try {
    const banners = await Banner.find({});
    res.json(banners);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ POST new banner (protected)
router.post("/", protect, async (req, res) => {
  const { heading, tagline, poster, video } = req.body;

  if (!heading || !tagline || !poster || !video) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const banner = new Banner({ heading, tagline, poster, video });
    await banner.save();
    res.status(201).json(banner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ PUT update banner
router.put("/:id", protect, async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) return res.status(404).json({ error: "Banner not found" });

    Object.assign(banner, req.body);
    await banner.save();

    res.json(banner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ DELETE banner (safe file delete)
router.delete("/:id", protect, async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid Banner ID" });
    }

    const banner = await Banner.findById(req.params.id);
    if (!banner) return res.status(404).json({ error: "Banner not found" });

    // Helper: resolve server file path
    const getServerFilePath = (fileUrl) => {
      if (!fileUrl) return null;
      const fileName = fileUrl.split("/uploads/")[1];
      if (!fileName) return null;
      return path.join(process.cwd(), "uploads", fileName);
    };

    for (const fileUrl of [banner.video, banner.poster]) {
      const absPath = getServerFilePath(fileUrl);
      if (!absPath) continue;
      try {
        await fs.unlink(absPath);
        console.log("🗑️ Deleted file:", absPath);
      } catch {
        console.warn("⚠️ File not found, skipping:", absPath);
      }
    }

    await banner.deleteOne();
    res.json({ message: "Banner deleted successfully" });
  } catch (err) {
    console.error("DELETE route error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
