import http from "./apiService";

export const sessionService = {
  createSession: async (data) => {
    const response = await http.post("/sessions", data);
    return response.data;
  },

  getActiveSessions: async () => {
    const response = await http.get("/sessions/active");
    return response.data;
  },

  getRecentSessions: async () => {
    const response = await http.get("/sessions/recent-sessions");
    return response.data;
  },

  getSessionById: async (id) => {
    const response = await http.get(`/sessions/${id}`);
    return response.data;
  },

  joinSession: async (id) => {
    const response = await http.post(`/sessions/${id}/join`);
    return response.data;
  },

  endSession: async (id) => {
    const response = await http.post(`/sessions/${id}/end`);
    return response.data;
  },
};
