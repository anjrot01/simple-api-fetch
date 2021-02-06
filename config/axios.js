import axios from "axios";

const axiosFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_BEARER
  }
});

export const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;

export default axiosFetch;
