import React from "react";
import { Table } from "antd";
import { BButton } from "../../components/atoms/index";
import { EyeFilled, EditFilled, DeleteFilled } from "@ant-design/icons";

const columns = [
  {
    title: "Nama Produk",
    dataIndex: "product_name",
    key: "product_name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
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
            icon={<EyeFilled className="text-gray-600 hover:text-primary" />}
            // onClick={() => viewData(record)}
          />
        </div>
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "2",
    name: "Jim Green",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "3",
    name: "Joe Black",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "4",
    name: "John Brown",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "5",
    name: "Jim Green",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "6",
    name: "Joe Black",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "7",
    name: "John Brown",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "8",
    name: "Jim Green",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "9",
    name: "Joe Black",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "10",
    name: "John Brown",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "11",
    name: "Jim Green",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
  {
    key: "12",
    name: "Joe Black",
    email: "abc@gmail.com",
    handphone: "+6281234567890",
  },
];

export default function ListProduct() {
  return (
    <>
      <div className="mb-4">
        <h1>List Product</h1>
      </div>
      <div className="bg-white p-3 shadow-md rounded-md">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            defaultPageSize: 5,
            defaultCurrent: 1,
            total: 100,
            position: ["bottomCenter"],
          }}
        />
      </div>
    </>
  );
}
