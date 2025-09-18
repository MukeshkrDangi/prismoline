"use client";

import { useEffect, useState } from "react";
import api from "../../utils/api"; // ✅ centralized API import

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function ContactTable() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selected, setSelected] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await api.get<Contact[]>("/contact"); // baseURL already /api hai
      setContacts(res.data);
    } catch (err: any) {
      console.error("❌ Error fetching contacts:", err);
      alert("❌ Failed to fetch contacts: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading contacts...</p>;
  }

  return (
    <div className="overflow-x-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Submissions</h2>

      <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((c) => (
              <tr key={c._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{c.name}</td>
                <td className="px-4 py-2">{c.email}</td>
                <td className="px-4 py-2">{c.phone}</td>
                <td className="px-4 py-2 truncate max-w-xs">{c.message}</td>
                <td className="px-4 py-2">
                  {new Date(c.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setSelected(c)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-600">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Modal for full detail */}
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Contact Detail</h2>
            <p><strong>Name:</strong> {selected.name}</p>
            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Phone:</strong> {selected.phone}</p>
            <p className="mt-2">
              <strong>Message:</strong>
              <br />
              {selected.message}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Date:</strong> {new Date(selected.createdAt).toLocaleString()}
            </p>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
