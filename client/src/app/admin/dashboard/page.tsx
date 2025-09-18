"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BannerForm, { Banner } from "../../../components/admin/BannerForm";
import BannerTable from "../../../components/admin/BannerTable";
import ContactTable from "../../../components/admin/ContactTable";
import { getToken, removeToken } from "../../../lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    const stored = getToken();
    if (!stored) {
      router.push("/admin/login");
    } else {
      setToken(stored);
    }
  }, [router]);

  const handleSuccess = () => {
    setEditingBanner(null);
    setRefreshFlag(!refreshFlag); // trigger table refresh
  };

  const handleLogout = () => {
    removeToken();
    router.push("/admin/login");
  };

  if (!token)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Banners Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <BannerForm
          token={token}
          selectedBanner={editingBanner}
          onSuccess={handleSuccess}
          onCancelEdit={() => setEditingBanner(null)}
        />
        <BannerTable
          key={refreshFlag.toString()}
          token={token}
          onEdit={setEditingBanner}
        />
      </div>

      {/* Contacts Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          📩 Contact Submissions
        </h2>
        <ContactTable />
      </div>
    </div>
  );
}
