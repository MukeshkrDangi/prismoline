import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import User from "./models/User.js";

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "prismoline" });
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      console.log("❌ ADMIN_EMAIL or ADMIN_PASSWORD missing in .env");
      process.exit(1);
    }

    let user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      console.log("ℹ️ Admin already exists:", user.email);
    } else {
      user = await User.create({ name: "Admin", email, password, role: "admin" });
      console.log("✅ Admin created:", user.email);
    }
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  }
}

run();
