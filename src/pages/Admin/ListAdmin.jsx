import React, { useState } from "react";
import { Table, Modal } from "antd";
import { BButton } from "../../components/atoms";
import {
  EditFilled,
  DeleteFilled,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import FormSection from "./FormSection";

const { confirm } = Modal;

export default function ListAdmin() {
  const [section, setSection] = useState("default");
  const [childData, setChildData] = useState({});
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Brown",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 2,
      name: "Jim Green",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 3,
      name: "Joe Black",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 4,
      name: "John Brown",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 5,
      name: "Jim Green",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 6,
      name: "Joe Black",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 7,
      name: "John Brown",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 8,
      name: "Jim Green",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 9,
      name: "Joe Black",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 10,
      name: "John Brown",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 11,
      name: "Jim Green",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
    {
      id: 12,
      name: "Joe Black",
      email: "abc@gmail.com",
      handphone: "+6281234567890",
    },
  ]);
  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Handphone",
      dataIndex: "handphone",
      key: "handphone",
    },
    {
      title: "Action",
      dataIndex: "action",
      fixed: "right",
      width: 100,
      render: (text, record) => (
        <>
          <div className="flex items-center gap-x-1">
            <BButton
              className="py-1 rounded-lg hover:border-primary"
              icon={<EditFilled className="text-gray-600 hover:text-primary" />}
              onClick={() => editData(record)}
            />
            <BButton
              className="py-1 rounded-lg hover:border-primary"
              icon={
                <DeleteFilled className="text-gray-600 hover:text-primary" />
              }
              onClick={() => deleteData(record)}
            />
          </div>
        </>
      ),
    },
  ];

  const editData = (record) => {
    setChildData(record);
    setSection("edit");
  };

  const addData = () => {
    setSection("add");
  };

  const deleteData = (id) => {
    confirm({
      title: "Konfirmasi Hapus",
      content:
        "Apakah kamu yakin menghapus data ini? Aksi ini tidak dapat dibatalkan.",
      icon: <ExclamationCircleOutlined />,
    });
  };

  return (
    <>
      {section === "default" && (
        <div className="content-section">
          <div className="header">
            <h2>List Admin</h2>
            <div className="flex items-center gap-4">
              <BButton
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => addData()}
              >
                Tambah Data
              </BButton>
            </div>
          </div>
          <div className="body">
            <Table
              columns={columns}
              dataSource={data}
              pagination={true}
              rowKey="id"
            />
          </div>
        </div>
      )}
      {section !== "default" && (
        <FormSection
          setSection={setSection}
          section={section}
          childData={childData}
        />
      )}
    </>
  );
}
