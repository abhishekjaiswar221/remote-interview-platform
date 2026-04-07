import axios from "axios";
import { ENV } from "../lib/env.js";

const http = axios.create({
  baseURL: ENV.RCE_ENGINE_API_BASE_URL,
  withCredentials: true, // By adding this field browser will send the cookies to the server automatically, on every request
});

export default http;
