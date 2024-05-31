import React from "react";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Handphone",
    dataIndex: "handphone",
    key: "handphone",
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

export default function ListAdmin() {
  return (
    <>
      <div className="mb-4">
        <h1>List Admin</h1>
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
