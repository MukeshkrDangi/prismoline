// Handle token in localStorage (always "adminToken")

export function setToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("adminToken", token);
  }
}

export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("adminToken");
  }
  return null;
}

export function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("adminToken");
  }
}
