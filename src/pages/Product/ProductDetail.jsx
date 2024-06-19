import React, { useState, useEffect } from "react";
import { Images } from "../../components/atoms/index";
import { numberWithCommas } from "../../utils/Helper";
import {
  getMediaProduct,
  getProductById,
  getProductCategoriesById,
} from "../../services/api";
import { Table } from "antd";

export default function ProductDetail(props) {
  const { childData } = props;
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState({});
  const [photoProduct, setPhotoProduct] = useState(null);

  useEffect(() => {
    getCategory();
    return () => {};
  }, []);

  useEffect(() => {
    if (childData.id) {
      fetchProductById();
    }
  }, [childData.id]);

  useEffect(() => {
    const fetchImage = async () => {
      if (product && product.image && product.image.trim() !== "") {
        try {
          const imageUrl = await getMediaProduct(product.image);
          if (imageUrl) {
            setPhotoProduct(imageUrl);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchImage();
  }, [product]);

  const getCategory = () => {
    setLoading(true);
    getProductCategoriesById(childData.category_id)
      .then((res) => {
        console.log(res.data.data);
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchProductById = () => {
    setLoading(true);
    getProductById(childData.id)
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const variantColumn = [
    {
      title: "Nama Variant",
      dataIndex: "name",
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
  ];

  console.log(photoProduct);
  return (
    <>
      <div className="content-section">
        <div className="body pb-16">
          <h2 className="text-lg font-semibold text-primary py-2">Data</h2>
          <div className="mb-4">
            <div className="text-secondary mb-2">Foto Produk</div>
            <div className="flex gap-4">
              <Images src={photoProduct} width={70} height={70} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-secondary">Nama Produk</label>
              <div>{product.name}</div>
            </div>
            <div>
              <label className="text-secondary">Kategori Produk</label>
              <div>{category.name}</div>
            </div>
            <div>
              <div className="text-secondary">Price</div>
              <div>Rp. {numberWithCommas(parseInt(childData.price))}</div>
            </div>
          </div>
          <div className="mt-4 text-justify">
            <div>
              <div className="text-secondary ">Deskripsi</div>
              <div>{childData.description}</div>
            </div>
          </div>
          <div className="">
            <div className="fit-scroll py-2">
              <div className="text-lg font-semibold text-primary py-2 mt-4">
                Variant
              </div>
              {product && product.variants && product.variants.length > 0 && (
                <Table
                  dataSource={product.variants.filter(
                    (x) => x.action !== "Delete"
                  )}
                  columns={variantColumn}
                  pagination={false}
                  rowKey="id"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
