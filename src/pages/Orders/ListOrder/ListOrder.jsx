import React, { useState, useEffect } from "react";
import { Table, Tabs, DatePicker } from "antd";
import { BButton, Tags } from "../../../components/atoms/index";
import { EyeFilled } from "@ant-design/icons";
import OrderDetails from "./OrderDetail";

const { TabPane } = Tabs;

export default function ListOrder() {
  const [section, setSection] = useState("default");
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [childData, setChildData] = useState({});

  useEffect(() => {
    if (section === "default") {
      setChildData({});
    }
  }, [section]);

  const columns = [
    {
      title: "Payment Invoice",
      dataIndex: "payment_invoice",
      sorter: (a, b) => a.payment_invoice.localeCompare(b.payment_invoice),
    },
    {
      title: "Nama Customer",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Handphone",
      dataIndex: "handphone",
    },
    {
      title: "Tanggal Pengambilan",
      dataIndex: "pickup_date",
      sorter: (a, b) => a.pickup_date - b.pickup_date,
      render: (pickup_date) => new Date(pickup_date).toLocaleDateString(),
    },
    {
      title: "Payment Type",
      dataIndex: "payment_type",
      render: (payment_type) => {
        const paymentTypeColors = {
          "Transfer e-money": "purple",
          "Bayar Di Tempat": "blue",
        };
        const color = paymentTypeColors[payment_type] || "grey";
        return <Tags color={color} title={payment_type} />;
      },
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
            icon={<EyeFilled className="text-gray-600 hover:text-primary" />}
            onClick={() => viewData(record)}
          />
        </div>
      ),
    },
  ];

  const viewData = (record) => {
    setChildData(record);
    setSection("view");
  };

  const dummyData = [
    {
      id: 1,
      payment_invoice: "INV001",
      name: "John Doe",
      handphone: "081234567890",
      email: "johndoe@gmail.com",
      pickup_date: new Date(2024, 5, 1, 14, 30),
      payment_type: "Transfer e-money",
      status: "1",
      order_goods: [
        {
          product_name: "tenda",
          subtotal_price: "200000",
          subtotal_quantity: "1",
          subtotal_duration: "2",
        },
        {
          product_name: "tracking pole",
          subtotal_price: "100000",
          subtotal_quantity: "3",
          subtotal_duration: "2",
        },
      ],
      total_price: "300000",
      total_quantity: "4",
    },
    {
      id: 2,
      payment_invoice: "INV002",
      name: "Jane Smith",
      handphone: "081234567891",
      email: "janesmith@gmail.com",
      pickup_date: new Date(2024, 0, 2, 9, 15),
      return_date: new Date(2024, 0, 4),
      payment_type: "Bayar Di Tempat",
      status: "2",
      order_goods: [
        {
          product_name: "tenda",
          subtotal_price: "200000",
          subtotal_quantity: "1",
          subtotal_duration: "2",
        },
        {
          product_name: "tracking pole",
          subtotal_price: "100000",
          subtotal_quantity: "3",
          subtotal_duration: "2",
        },
      ],
      total_price: "300000",
      total_quantity: "4",
    },
    {
      id: 3,
      payment_invoice: "INV003",
      name: "Alice Johnson",
      handphone: "081234567892",
      email: "alicejohnson@gmail.com",
      pickup_date: new Date(2024, 5, 3, 16, 45),
      payment_type: "Transfer e-money",
      status: "2",
      order_goods: [
        {
          product_name: "tenda",
          subtotal_price: "200000",
          subtotal_quantity: "1",
          subtotal_duration: "2",
        },
        {
          product_name: "tracking pole",
          subtotal_price: "100000",
          subtotal_quantity: "3",
          subtotal_duration: "2",
        },
      ],
      total_price: "300000",
      total_quantity: "4",
    },
    {
      id: 4,
      payment_invoice: "INV004",
      name: "Bob Brown",
      handphone: "081234567893",
      email: "bobbrown@gmail.com",
      pickup_date: new Date(2024, 5, 4, 11, 0),
      payment_type: "Bayar Di Tempat",
      status: "4",
      order_goods: [
        {
          product_name: "tenda",
          subtotal_price: "200000",
          subtotal_quantity: "1",
          subtotal_duration: "2",
        },
        {
          product_name: "tracking pole",
          subtotal_price: "100000",
          subtotal_quantity: "3",
          subtotal_duration: "2",
        },
      ],
      total_price: "300000",
      total_quantity: "4",
    },
  ];

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const filteredData = dummyData.filter((item) => item.status === activeTab);

  return (
    <>
      {section === "default" && (
        <div className="content-section">
          <div className="header">
            <h2>List Order</h2>
          </div>
          <div className="body">
            <Tabs defaultActiveKey="1" onChange={handleTabChange}>
              <TabPane tab="Belum Bayar" key="1" />
              <TabPane tab="Sedang Disewa" key="2" />
              <TabPane tab="Selesai" key="3" />
              <TabPane tab="Dibatalkan" key="4" />
            </Tabs>
            <Table
              dataSource={filteredData}
              columns={columns}
              pagination={true}
              rowKey="id"
              // loading={loading}
            />
          </div>
        </div>
      )}
      {section !== "default" && (
        <OrderDetails
          childData={childData}
          setSection={setSection}
          section={section}
        />
      )}{" "}
    </>
  );
}
