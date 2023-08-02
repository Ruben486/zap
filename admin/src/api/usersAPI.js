import axios from "axios";
import { API_URL } from "../config/server.js";

const usersApi = axios.create({
  baseURL:  API_URL
});

export const getUsers = async () => {
  const res = await usersApi.get('/users')
  return res.data
};

