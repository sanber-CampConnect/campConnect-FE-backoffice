import React, { useState } from "react";
import heroImg from "../../assets/images/hero-image.svg";
import logo from "../../assets/icons/main-logo.png";
import { Link } from "react-router-dom";
import { authLogin } from "../../services/api";
import { notification, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserData } from "../../redux/auth/action";

export default function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (e) => {
    e.preventDefault();
    setLoading(true);
    const values = { email, password };
    console.log("Success:", values);
    authLogin(values)
      .then((res) => {
        if (res.status === 200) {
          const userData = res.data.data;
          dispatch(getUserData(userData));

          notification.success({
            message: "Login Berhasil",
            description: "Kamu berhasil masuk ke dashboard",
          });
          navigate("/");
        }
      })
      .catch((err) => {
        const errorMessage =
          err.response?.data?.message || "Terjadi kesalahan saat login";
        notification.error({
          message: "Login Gagal!",
          description: errorMessage,
          placement: "topRight",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-full gap-x-24">
        <img src={heroImg} alt="" />
        <div className="card shadow-lg bg-white rounded-lg px-5 py-3 w-80">
          <img src={logo} alt="" />
          <h3 className="text-lg font-semibold">Masuk</h3>
          <form className="space-y-4" onSubmit={onFinish}>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Masukkan kata sandi Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              {loading ? <Spin /> : "Masuk"}
            </button>
          </form>
          <Link to="/auth/forgot-password">
            <p className="cursor-pointer text-primary">Lupa Kata Sandi?</p>
          </Link>
        </div>
      </div>
    </>
  );
}
