import React, { useState, useEffect } from "react";
import { Table, Modal, notification } from "antd";
import _ from "lodash";
import { BButton, Tags } from "../../../components/atoms/index";
import {
  PlusOutlined,
  EyeFilled,
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import FormSection from "./FormSection";

const { confirm } = Modal;

export default function ManageCategory() {
  const [section, setSection] = useState("default");
  const [childData, setChildData] = useState({});
  const [data, setData] = useState([
    {
      key: 1,
      category_name: "Alat Makan",
      description:
        "Barang-barang yang berhubungan dengan kegiatan makan, seperti kompor portable, peralatan masak, dll.",
    },
    {
      key: 2,
      category_name: "Hiking",
      description:
        "Barang-barang yang berguna saat melakukan kegiatan hiking atau trekking.",
    },
    {
      key: 4,
      category_name: "Perkemahan",
      description:
        "Barang-barang yang diperlukan untuk kegiatan perkemahan di alam terbuka.",
    },
  ]);

  useEffect(() => {
    if (section === "default") {
      setChildData({});
    }
    return () => {};
  }, [section]);

  const editData = (record) => {
    setChildData(record);
    setSection("edit");
  };

  const columns = [
    {
      title: "Nama Kategori",
      dataIndex: "category_name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Deskripsi",
      dataIndex: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
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
              className="py-1 rounded-lg"
              icon={<EditFilled className="text-gray-600 hover:text-primary" />}
              onClick={() => editData(record)}
            />
            <BButton
              className="py-1 rounded-lg"
              icon={
                <DeleteFilled className="text-gray-600 hover:text-primary" />
              }
              onClick={() => deleteData(record.id)}
            />
          </div>
        </>
      ),
    },
  ];

  const addData = () => {
    setSection("add");
  };

  const deleteData = (id) => {
    confirm({
      title: "Konfirmasi Hapus",
      content:
        "Apakah kamu yakin menghapus kategory ini? Aksi ini tidak dapat dibatalkan.",
      icon: <ExclamationCircleOutlined />,
    });
  };

  return (
    <>
      {section === "default" && (
        <div className="content-section">
          <div className="header">
            <h2>Manage Kelas</h2>
            <BButton
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => addData()}
            >
              Tambah Data
            </BButton>
          </div>
          <div className="body">
            <Table
              dataSource={data}
              columns={columns}
              pagination={false}
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
