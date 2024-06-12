import axios from "axios";
import { get, post, put, patch, delete_request } from "../utils/HttpRequest";

const { REACT_APP_API_URL } = process.env;

/* =================================================== Authentication ========================================================== */
export const authLogin = async (params) => {
  try {
    const response = await post(`${REACT_APP_API_URL}/auth/login`, params);
    console.log(response);
    const token = response.data.authorization;
    localStorage.setItem("token", token);
    return response;
  } catch (error) {
    console.log("Login failed: ", error);
    throw error;
  }
};

export const logOut = () => {
  localStorage.removeItem("token");
};
