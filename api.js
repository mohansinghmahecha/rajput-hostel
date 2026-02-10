// lib/api.js
import axios from "axios";

/* =====================
   AXIOS INSTANCE
===================== */
const API = axios.create({
  baseURL:  "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
/* =====================
   BASE ROUTES
===================== */
const BASEURL = "http://localhost:5000/api"
const AUTH_BASE = "/auth";
export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `${BASEURL+AUTH_BASE}/register`,
    LOGIN: `${BASEURL+AUTH_BASE}/login`,
    VERIFY_EMAIL_OTP: `${AUTH_BASE}/verify-email-otp`,
  },
};


export default API;
