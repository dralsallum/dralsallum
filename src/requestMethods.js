// requestMethods.js

import axios from "axios";

const BASE_URL = "https://dralsallumapi-8efe1bd8f8df.herokuapp.com/api";

// Retrieve token from localStorage if needed
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
