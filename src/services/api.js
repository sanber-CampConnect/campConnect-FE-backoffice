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

/* =================================================== Product Management ========================================================== */
export const getListProducts = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/products`;
  return await get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addProduct = async (data) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/products`;
  return await post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/products/${id}`;
  return await delete_request(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProduct = async (id, data) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/products/${id}`;
  return await put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProductById = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/products/${id}`;
  return await get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/* ================================================ Product Category Management ===================================================== */

export const getProductCategories = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/categories`;
  return await get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProductCategoriesById = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/categories/${id}`;
  return await get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addProductCategories = async (data) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/categories`;
  return await post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProductCategories = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/categories/${id}`;
  return await delete_request(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editProductCategories = async (id, data) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const url = `${REACT_APP_API_URL}/categories/${id}`;
  return await put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/* =================================================== GET MEDIA IMAGE ========================================================== */
export const getMediaProduct = async (media) => {
  const url = `${REACT_APP_API_URL}/assets/${media}`;
  try {
    const response = await axios.get(url, {
      responseType: "blob",
    });
    return URL.createObjectURL(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw error;
  }
};
