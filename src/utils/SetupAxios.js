import { Modal, notification } from "antd";
import { resetUserData } from "../redux/auth/action";
import store from "../redux/store";
import { logOut } from "../services/api";
import axiosInstance from "../utils/HttpRequest";

export default function setupAxios(axios, dispatch) {
  // setup axios interceptors
  axios.interceptors.request.use(
    (request) => {
      const token = store.getState().auth.user.token;
      if (!request.url.includes("auth") && token) {
        request.headers["Authorization"] = `Bearer ${token}`;
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        const isAuthRoute = error.response.config.url.includes("auth");
        if (
          !isAuthRoute &&
          (error.response.status === 401 ||
            error.response.statusText === "Unauthorized")
        ) {
          Modal.error({
            title: "Session Anda telah berakhir",
            content: "Anda akan diarahkan ke Halaman Login!",
            onOk: () => {
              logOut();
              dispatch(resetUserData());
              Modal.destroyAll();
              window.location.href = "/auth/login"; // Redirect to login page
            },
          });
        }
      } else {
        notification.error({
          message: "Network Error",
          description: "There was a problem connecting to the server.",
        });
      }
      return Promise.reject(error.response || error);
    }
  );
}

// Use the axiosInstance
setupAxios(axiosInstance, store.dispatch);
