import React, { useState, useEffect } from "react";
import { Table } from "antd";
import _ from "lodash";
import { BButton } from "../../../components/atoms/index";
import { EyeFilled } from "@ant-design/icons";
import OrderRatingDetails from "./OrderRatingDetail";

export default function OrderRating() {
  const [section, setSection] = useState("default");
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
      title: "Ulasan",
      dataIndex: "review",
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

  const dummyData = [
    {
      id: 1,
      payment_invoice: "INV0001",
      name: "Triple Z",
      handphone: "081234567890",
      review: "bagus",
      order_date: new Date(2024, 5, 1),
      leased_goods: ["Tenda", "Sepatu", "Tracking Pole"],
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
            <h2>Rating Pesanan</h2>
          </div>
          <div className="body">
            <Table
              dataSource={dummyData}
              columns={columns}
              pagination={true}
              rowKey="id"
            />
          </div>
        </div>
      )}
      {section !== "default" && (
        <OrderRatingDetails
          childData={childData}
          setSection={setSection}
          section={section}
        />
      )}
    </>
  );
}
