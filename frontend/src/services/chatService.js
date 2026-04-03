import http from "./apiService";

export const chatService = {
  getStreamToken: async () => {
    const response = await http.get("/chat/token");
    return response.data;
  },
};
