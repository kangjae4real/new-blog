import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
});
