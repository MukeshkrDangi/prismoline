import axios from "axios";

// ✅ Base URL (env se ya fallback localhost se)
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// ✅ Axios instance
const api = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true, // agar cookies ya auth headers chahiye
});

// ✅ Token set / remove helper
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// ✅ Contact form submission
export const sendContactForm = async (data) => {
  try {
    const res = await api.post("/contact", data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    console.error("❌ Error sending contact form:", err.response?.data || err.message);
    throw err;
  }
};

// ✅ Get all contacts (for admin dashboard)
export const getContacts = async () => {
  try {
    const res = await api.get("/contact");
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching contacts:", err.response?.data || err.message);
    throw err;
  }
};

export default api;
