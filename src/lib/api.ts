// const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8888/api";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://the-ict-hub-api-production.up.railway.app/api";
const API_KEY = process.env.API_SECRET_KEY || "super-secret-key-123";



export const baseAPI = {
  get: async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      cache: "no-store", // Ensure fresh data for admin
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json();
  },

  post: async (endpoint: string, data: any) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.detail || `API error: ${res.status}`);
    }
    return res.json();
  },

  put: async (endpoint: string, data: any) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.detail || `API error: ${res.status}`);
    }
    return res.json();
  },

  delete: async (endpoint: string) => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.detail || `API error: ${res.status}`);
    }
    return res.json();
  },
};
