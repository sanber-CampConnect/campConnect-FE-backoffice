import React, { useEffect, useState } from "react";
import { Table, Modal, notification } from "antd";
import { BButton } from "../../components/atoms/index";
import {
  EyeFilled,
  EditFilled,
  DeleteFilled,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { numberWithCommas } from "../../utils/Helper";
import FormSection from "./FormSection";
import { getListProducts, deleteProduct } from "../../services/api";

const { confirm } = Modal;

export default function ListProduct() {
  const [section, setSection] = useState("default");
  const [loading, setLoading] = useState(false);
  const [childData, setChildData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const getData = () => {
    setLoading(true);
    getListProducts()
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
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
    setChildData(record);
    setSection("edit");
  };

  const addData = () => {
    setSection("add");
  };

  const deleteData = (record) => {
    confirm({
      title: "Konfirmasi Hapus",
      content:
        "Apakah kamu yakin menghapus data ini? Aksi ini tidak dapat dibatalkan.",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        return new Promise((resolve, reject) => {
          deleteProduct(record.id)
            .then((res) => {
              notification.success({
                message: "Sukses!",
                description: "Sukses menghapus produk",
                placement: "topRight",
              });
              getData();
              resolve(res);
            })
            .catch((err) => {
              console.log(err);
              notification.error({
                message: "Gagal!",
                description: err ? err : "Gagal menghapus produk",
                placement: "topRight",
              });
              reject(err);
            });
        });
      },
    });
  };

  const viewData = (record) => {
    setChildData(record);
    setSection("view");
  };

  const columns = [
    {
      title: "Nama Produk",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => {
        return <span>Rp {numberWithCommas(text)}</span>;
      },
      sorter: (a, b) => a.price - b.price,
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
              icon={<EyeFilled className="text-gray-600 hover:text-primary" />}
              onClick={() => viewData(record)}
            />
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

  return (
    <>
      {section === "default" && (
        <div className="content-section">
          <div className="header">
            <h2>List Product</h2>
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
          childData={childData}
          setSection={setSection}
          section={section}
          getData={getData}
        />
      )}
    </>
  );
}
