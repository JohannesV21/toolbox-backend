import axios from "axios";
import "dotenv/config";

export const BACK_URL = process.env.API_TOOLBOX;

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
