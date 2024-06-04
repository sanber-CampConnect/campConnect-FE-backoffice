import React, { useState } from "react";
import { Table } from "antd";
import { Images } from "../../components/atoms/index";
import { EyeFilled } from "@ant-design/icons";
import CustomerDetails from "./CustomerDetail";

export default function ListCustomer() {
  const [section, setSection] = useState("default");
  const [childData, setChildData] = useState({});
  const [data, setData] = useState([
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
  ]);
  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <div className="flex items-center gap-4">
          <Images src={record.outlet_image} width={60} height={60} />
          <span>{text}</span>
        </div>
      ),
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
  ];

  const viewData = (record) => {
    setChildData(record);
    setSection("view");
  };

  return (
    <>
      {section === "default" && (
        <div className="content-section">
          <div className="header">
            <h2>List Customer</h2>
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
        <CustomerDetails
          childData={childData}
          setSection={setSection}
          section={section}
        />
      )}
    </>
  );
}
