import React from "react";
import { Layout } from "antd";
import logo from "../../assets/icons/main-logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { resetUserData } from "../../redux/auth/action";
import { Divider, notification, Modal, Menu, Dropdown } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { logOut } from "../../services/api";

const { Header } = Layout;

export default function TopNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);

  const Logout = () => {
    dispatch(resetUserData());
    logOut();
    navigate("/auth/login");
    notification.success({
      message: "Keluar",
      description: "Kamu berhasil keluar dari dashboard",
    });
  };

  const confirmLogout = () => {
    Modal.confirm({
      title: "Keluar",
      content: "Apakah anda yakin ingin keluar?",
      okText: "Ya, Keluar",
      cancelText: "Batalkan",
      onOk: () => Logout(),
    });
  };

  const dropdownMenu = (
    <Menu className="divide-y-2">
      <Menu.Item key="0">
        <div
          onClick={() => confirmLogout()}
          className="flex items-center text-danger"
        >
          <div className="flex w-6">
            <LogoutOutlined className="text-danger" />
          </div>
          Logout
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Header className="bg-white flex justify-between items-center">
        <div className="cursor-pointer">
          <img src={logo} alt="" className="h-10" />
        </div>
        <div className="flex items-center">
          <Divider type="vertical" style={{ height: "2em" }} />
          <div className="flex items-center">
            <UserOutlined />
            <div className="ml-3">
              <div className="leading-none">Hi, {user.username}</div>
              <div className="leading-none mt-1 text-xs">{user.role}</div>
            </div>
          </div>
          <Divider
            type="vertical"
            style={{ height: "2em" }}
            className="mx-4 border-gray-300"
          />
          <Dropdown overlay={dropdownMenu} placement="bottomRight">
            <DownOutlined
              onClick={(e) => e.preventDefault()}
              style={{ fontSize: "16px", color: "#6B7280", fontWeight: "bold" }}
            />
          </Dropdown>
        </div>
      </Header>
    </>
  );
}
