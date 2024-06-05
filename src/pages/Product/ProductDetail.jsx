import React, { useState, useEffect } from "react";
import { ButtonBack, Images } from "../../components/atoms/index";
import { numberWithCommas } from "../../utils/Helper";

export default function ProductDetail(props) {
  const { childData } = props;
  const [listImage, setListImage] = useState([]);

  useEffect(() => {
    if (childData.image) {
      setListImage(childData.image);
    }
  }, [childData]);

  return (
    <>
      <div className="content-section">
        <div className="body pb-16">
          <h2 className="text-primary font-medium mb-3">Data</h2>
          <div className="mb-4">
            <div className="text-secondary mb-2">Foto Produk</div>
            <div className="flex gap-4">
              {listImage?.map((item, index) => (
                <Images src={item} key={index} width={70} height={70} />
              ))}
              {listImage?.length < 1 && <div>Tidak ada gambar</div>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-secondary">Nama Produk</label>
              <div>{childData.product_name}</div>
            </div>
            <div>
              <label className="text-secondary">Kategori Produk</label>
              <div>{childData.product_category}</div>
            </div>
            <div>
              <label className="text-secondary">Jenis Produk</label>
              <div className="flex gap-2 flex-wrap">
                {childData.product_type?.map((type, index) => (
                  <div className="custom-tag custom-tag-default" key={index}>
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary">Price</div>
              <div>Rp. {numberWithCommas(childData.price)}</div>
            </div>
            <div>
              <div className="text-secondary">Stock</div>
              <div>{numberWithCommas(childData.stock)}</div>
            </div>
            <div>
              <div className="text-secondary">Deskripsi</div>
              <div>{childData.description}</div>
            </div>
            <div>
              <label className="text-secondary">Tata Cara Penggunaan</label>
              <div>
                <ol>
                  {childData.how_to_use?.map((step, index) => (
                    <li key={index}>
                      {index + 1}. {step}
                    </li> // Menambahkan nomor indeks
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
