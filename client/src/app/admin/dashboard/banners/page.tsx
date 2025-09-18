"use client";
import { useState } from "react";

export default function BannerForm() {
  const [heading, setHeading] = useState("");
  const [tagline, setTagline] = useState("");
  const [poster, setPoster] = useState("");
  const [video, setVideo] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5001/api/banners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ heading, tagline, poster, video }),
    });
    if (res.ok) {
      alert("✅ Banner added successfully!");
      setHeading("");
      setTagline("");
      setPoster("");
      setVideo("");
    } else {
      alert("❌ Error adding banner");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-blue-800">Add New Banner</h2>
      <input
        type="text"
        placeholder="Heading"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        className="w-full p-3 border rounded"
      />
      <input
        type="text"
        placeholder="Tagline"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
        className="w-full p-3 border rounded"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        className="w-full p-3 border rounded"
      />
      <input
        type="text"
        placeholder="Video URL"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
        className="w-full p-3 border rounded"
      />
      <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
        Save Banner
      </button>
    </form>
  );
}
