import axios from "axios";

const api = axios.create({
  baseURL: "http://imageyukla.duckdns.org", // backend manzili
  withCredentials: false, // cookie yubormasa ham bo'ladi
});

export default api;
