import React, { useState, useEffect } from "react";
import { Table, Modal, notification } from "antd";
import { BButton } from "../../../components/atoms/index";
import {
  PlusOutlined,
  EditFilled,
  DeleteFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import FormSection from "./FormSection";
import {
  getProductCategories,
  deleteProductCategories,
  getProductCategoriesById,
} from "../../../services/api";

const { confirm } = Modal;

export default function ManageCategory() {
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState("default");
  const [childData, setChildData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    getProductCategories()
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          message: "Failed to fetch data",
          description: "There was an error fetching the data.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (section === "default") {
      setChildData({});
    }
  }, [section]);

  const editData = (record) => {
    getProductCategoriesById(record.id)
      .then((res) => {
        setChildData(res.data.data);
        setSection("edit");
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const columns = [
    {
      title: "Nama Kategori",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Action",
      dataIndex: "action",
      fixed: "right",
      width: 100,
      render: (text, record) => (
        <div className="flex items-center gap-x-1">
          <BButton
            className="py-1 rounded-lg hover:border-primary"
            icon={<EditFilled className="text-gray-600 hover:text-primary" />}
            onClick={() => editData(record)}
          />
          <BButton
            className="py-1 rounded-lg hover:border-primary"
            icon={<DeleteFilled className="text-gray-600 hover:text-primary" />}
            onClick={() => deleteData(record)}
          />
        </div>
      ),
    },
  ];

  const addData = () => {
    setSection("add");
  };

  const deleteData = (record) => {
    confirm({
      title: "Konfirmasi Hapus",
      content:
        "Apakah kamu yakin menghapus kategory ini? Aksi ini tidak dapat dibatalkan.",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        return new Promise((resolve, reject) => {
          deleteProductCategories(record.id)
            .then((res) => {
              notification.success({
                message: "Sukses!",
                description: "Sukses menghapus kategori produk",
                placement: "topRight",
              });
              getData();
              resolve(res);
            })
            .catch((err) => {
              console.log(err);
              notification.error({
                message: "Gagal!",
                description: err ? err : "Gagal menghapus kategori produk",
                placement: "topRight",
              });
              reject(err);
            });
        });
      },
    });
  };

  return (
    <>
      {section === "default" && (
        <div className="content-section">
          <div className="header">
            <h2>Manage Kategori</h2>
            <BButton type="primary" icon={<PlusOutlined />} onClick={addData}>
              Tambah Data
            </BButton>
          </div>
          <div className="body">
            <Table
              dataSource={loading ? [] : data}
              columns={columns}
              pagination={false}
              rowKey="id"
              loading={loading}
            />
          </div>
        </div>
      )}
      {section !== "default" && (
        <FormSection
          setSection={setSection}
          section={section}
          childData={childData}
          getData={getData}
        />
      )}
    </>
  );
}
