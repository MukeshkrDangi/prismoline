import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  video: { type: String, required: true },
  poster: { type: String, required: true },
  heading: { type: String, required: true },
  tagline: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Banner", bannerSchema);
