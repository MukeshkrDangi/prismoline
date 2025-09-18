"use client";

import { useEffect, useState } from "react";
import api, { setAuthToken } from "../../utils/api";
import { Banner } from "./BannerForm";

interface BannerTableProps {
  token: string;
  onEdit: (banner: Banner) => void;
}

export default function BannerTable({ token, onEdit }: BannerTableProps) {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBanners = async () => {
    setLoading(true);
    setAuthToken(token);

    try {
      // ✅ sirf "/banners" likhna hai, kyunki baseURL already "/api" hai
      const res = await api.get<Banner[]>("/banners");
      setBanners(res.data);
    } catch (err: any) {
      console.error("❌ Error fetching banners:", err);
      alert(
        "❌ Failed to fetch banners: " +
          (err.response?.data?.error || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this banner?")) return;

    try {
      setAuthToken(token);
      await api.delete(`/banners/${id}`); // ✅ yaha bhi /api mat lagao
      alert("✅ Banner deleted successfully!");
      fetchBanners();
    } catch (err: any) {
      console.error("❌ Error deleting banner:", err);
      alert("❌ " + (err.response?.data?.error || err.message));
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading banners...</p>;
  }

  return (
    <div className="bg-white p-6 rounded shadow overflow-x-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Banners List</h2>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Heading</th>
            <th className="border px-4 py-2">Tagline</th>
            <th className="border px-4 py-2">Poster</th>
            <th className="border px-4 py-2">Video</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {banners.length > 0 ? (
            banners.map((b) => (
              <tr key={b._id}>
                <td className="border px-4 py-2">{b.heading}</td>
                <td className="border px-4 py-2">{b.tagline}</td>
                <td className="border px-4 py-2">
                  {b.poster ? (
                    <img
                      src={b.poster}
                      alt="poster"
                      className="w-20 h-12 object-cover"
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td className="border px-4 py-2">
                  {b.video ? (
                    <a
                      href={b.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="border px-4 py-2 flex gap-2">
                  <button
                    onClick={() => onEdit(b)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => b._id && handleDelete(b._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-600">
                No banners found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
