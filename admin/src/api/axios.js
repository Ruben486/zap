import axios from "axios";
import { API_URL } from "../config/server.js";

const instance = axios.create({
  baseURL: API_URL, 
  withCredentials: false,
});

export default instance;
