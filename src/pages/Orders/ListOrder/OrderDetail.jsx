import React from "react";
import { Table } from "antd";
import { BButton, Tags, ButtonBack } from "../../../components/atoms/index";
import { numberWithCommas } from "../../../utils/Helper";

export default function OrderDetails(props) {
  const { setSection, section, childData } = props;

  const columnsProduct = [
    {
      title: "Nama Barang",
      dataIndex: "product_name",
    },
    {
      title: "Subtotal Quantity",
      dataIndex: "subtotal_quantity",
    },
    {
      title: "Subtotal Durasi",
      dataIndex: "subtotal_duration",
    },
    {
      title: "Subtotal Harga",
      dataIndex: "subtotal_price",
      key: "subtotal_price",
      render: (text) => `Rp. ${numberWithCommas(text)}`,
    },
  ];

  const statusText = {
    1: { title: "Belum Bayar", color: "purple" },
    2: { title: "Sedang Disewa", color: "blue" },
    3: { title: "Selesai", color: "green" },
    4: { title: "Dibatalkan", color: "red" },
  };
  const statusData = statusText[childData.status] || {
    title: "Unknown",
    color: "grey",
  };

  return (
    <>
      <div className="content-section">
        <div className="header">
          <div className="flex items-center">
            <ButtonBack onClick={() => setSection("default")} />
            <div className="header-title">{section === "view" && "Detail"}</div>
          </div>
        </div>
        <div className="body-with-footer">
          <div className="body-content">
            <div>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-primary font-medium mb-2">Customer</h2>
                  <Tags
                    color={statusData.color}
                    title={statusData.title}
                  />{" "}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-secondary">Nama Customer</div>
                    <div>{childData.name}</div>
                  </div>
                  <div>
                    <div className="text-secondary">Nomor Handphone</div>
                    <div>{childData.handphone}</div>
                  </div>
                  <div>
                    <div className="text-secondary">Email</div>
                    <div>{childData.email}</div>
                  </div>
                  <div>
                    <div className="text-secondary">Metode Pembayaran</div>
                    <div>{childData.payment_type}</div>
                  </div>
                  <div>
                    <div className="text-secondary">Waktu Pengambilan</div>
                    <div>
                      {childData.pickup_date
                        ? new Date(childData.pickup_date).toLocaleString()
                        : "N/A"}
                    </div>
                  </div>
                </div>
              </div>
              <BButton customclass="bg-green text-white hover:opacity-75">
                Lihat Bukti Pembayaran
              </BButton>
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-primary font-medium">Barang Order</h2>
                </div>
                {childData.order_goods && childData.order_goods.length > 0 && (
                  <Table
                    dataSource={childData.order_goods}
                    columns={columnsProduct}
                    rowKey="product_name"
                    pagination={false}
                    scroll={{ x: 1500 }}
                    style={{ width: "100%" }}
                    summary={(pageData) => {
                      let totalPrice = 0;
                      pageData.forEach((item) => {
                        totalPrice += parseInt(item.subtotal_price, 10);
                      });
                      return (
                        <Table.Summary fixed>
                          <Table.Summary.Row className="bg-green-50 text-darkGreen font-semibold">
                            <Table.Summary.Cell
                              index={0}
                              colSpan={3}
                              className="text-right"
                            >
                              Total Harga
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={3}>
                              Rp. {numberWithCommas(totalPrice)}
                            </Table.Summary.Cell>
                          </Table.Summary.Row>
                        </Table.Summary>
                      );
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="footer">
            {childData.status === "1" && (
              <>
                <BButton type="danger">Tolak Pesanan</BButton>
                <BButton type="primary">Terima Pesanan</BButton>
              </>
            )}
            {childData.status === "2" && (
              <BButton type="primary">Konfirmasi Pengembalian</BButton>
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
