import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // By adding this field browser will send the cookies to the server automatically, on every request
});

export default http;
