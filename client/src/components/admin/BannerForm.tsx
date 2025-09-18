"use client";

import { useEffect, useState } from "react";
import api, { setAuthToken } from "../../utils/api";

export interface Banner {
  _id?: string;
  heading: string;
  tagline: string;
  poster?: string;
  video?: string;
}

interface BannerFormProps {
  token: string;
  selectedBanner?: Banner | null;
  onSuccess: () => void;
  onCancelEdit?: () => void;
}

export default function BannerForm({
  token,
  selectedBanner,
  onSuccess,
  onCancelEdit,
}: BannerFormProps) {
  const [heading, setHeading] = useState("");
  const [tagline, setTagline] = useState("");
  const [poster, setPoster] = useState("");
  const [video, setVideo] = useState("");

  // Pre-fill when editing
  useEffect(() => {
    if (selectedBanner) {
      setHeading(selectedBanner.heading || "");
      setTagline(selectedBanner.tagline || "");
      setPoster(selectedBanner.poster || "");
      setVideo(selectedBanner.video || "");
    } else {
      resetForm();
    }
  }, [selectedBanner]);

  const resetForm = () => {
    setHeading("");
    setTagline("");
    setPoster("");
    setVideo("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!heading || !tagline || !poster || !video) {
      alert("❌ Please fill all fields!");
      return;
    }

    setAuthToken(token);

    try {
      if (selectedBanner?._id) {
        // Update existing banner
        await api.put(`/banners/${selectedBanner._id}`, {
          heading,
          tagline,
          poster,
          video,
        });
        alert("✅ Banner updated successfully!");
        if (onCancelEdit) onCancelEdit();
      } else {
        // Create new banner
        await api.post("/banners", {
          heading,
          tagline,
          poster,
          video,
        });
        alert("✅ Banner added successfully!");
        resetForm();
      }

      onSuccess();
    } catch (err: any) {
      console.error(err);
      alert("❌ " + (err.response?.data?.error || "Network error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-blue-800">
        {selectedBanner ? "Edit Banner" : "Add New Banner"}
      </h2>

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

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          {selectedBanner ? "Update Banner" : "Save Banner"}
        </button>

        {selectedBanner && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
