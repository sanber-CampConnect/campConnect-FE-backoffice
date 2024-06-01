import React from "react";
import { ButtonBack } from "../../../components/atoms/index";

export default function OrderRatingDetails(props) {
  const { setSection, section, childData } = props;
  const formattedOrderDate = childData.order_date
    ? new Date(childData.order_date).toLocaleDateString()
    : "";
  const leasedGoodsString = childData.leased_goods
    ? childData.leased_goods.join(", ")
    : "";

  return (
    <>
      <div className="content-section">
        <div className="header">
          <div className="flex items-center">
            <ButtonBack onClick={() => setSection("default")} />
            <div className="header-title">{section === "view" && "Detail"}</div>
          </div>
        </div>
        <div className="body pb-16">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-secondary">Payment Invoice</label>
              <div>{childData.payment_invoice}</div>
            </div>
            <div>
              <label className="text-secondary">Nama Customer</label>
              <div>
                <div>{childData.name}</div>
              </div>
            </div>
            <div>
              <label className="text-secondary">Tanggal Pesanan</label>
              <div>{formattedOrderDate}</div>
            </div>
            <div>
              <label className="text-secondary">Barang Sewa</label>
              <div className="flex flex-col gap-2">{leasedGoodsString}</div>
            </div>
            <div>
              <label className="text-secondary">Ulasan</label>
              <div>{childData.review}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
