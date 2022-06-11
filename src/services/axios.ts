import axios from 'axios';
import { mainHeader } from '.';

const client = axios.create()

client.interceptors.request.use((config) => {
  const token = JSON.parse(String(localStorage.getItem("jwt"))) as {
    accessTokenExpiry: number;
    refreshTokenExpiry: number;
    issuedAt: number;
    accessToken: string;
    refreshToken: string;
  } | null
  if (token && token.accessToken) {
    config.headers = {
      ...mainHeader,
      "Authorization": `Bearer ${token.accessToken}`
    }
  }
  config.headers = {
    ...mainHeader
  }
  return config
})

export { client }