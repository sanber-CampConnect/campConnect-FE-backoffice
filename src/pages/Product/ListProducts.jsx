import React, { useEffect, useState } from "react";
import { Table, Modal } from "antd";
import { BButton } from "../../components/atoms/index";
import {
  EyeFilled,
  EditFilled,
  DeleteFilled,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { numberWithCommas } from "../../utils/Helper";
import tendaXL from "../../assets/images/tenda-exl-chanodug.png";
import trackingPole from "../../assets/images/tracking-pole.png";
import sepatu from "../../assets/images/sepatu-gunung.png";
import FormSection from "./FormSection";
import { getListProducts } from "../../services/api";

const { confirm } = Modal;

export default function ListProduct() {
  const [section, setSection] = useState("default");
  const [loading, setLoading] = useState(false);
  const [childData, setChildData] = useState({});
  const [data, setData] = useState([
    // {
    //   key: "1",
    //   product_name: "Tenda EXL Chanodug Kap. 12P",
    //   product_category: "Tenda",
    //   price: "90000",
    //   product_type: ["Tenda EXL"],
    //   stock: "10",
    //   image: tendaXL,
    //   description:
    //     "Tenda adalah tempat pelindung yang terdiri dari lembaran kain atau bahan lainnya menutupi yang melekat pada kerangka tiang atau menempel pada tali pendukung. Beberapa tenda tidak perlu berdiri di atas tanah karena ada beberapa model tenda yang menggantung di pohon.",
    //   how_to_use: [
    //     "Siapkan tenda dan semua perlengkapan yang diperlukan.",
    //     "Pilih lokasi yang datar dan aman untuk mendirikan tenda.",
    //     "Keluarkan tenda dari kantong penyimpanan dan letakkan di lokasi yang telah dipilih.",
    //     "Rakit kerangka tenda dan pasang tiang penyangga.",
    //     "Pasang kain tenda pada kerangka dan kencangkan tali-talinya.",
    //     "Pastikan tenda terpasang dengan kuat dan aman.",
    //   ],
    // },
    // {
    //   key: "2",
    //   product_name: "Sepatu",
    //   product_category: "Alas Kaki",
    //   product_type: ["31", "32", "33"],
    //   price: "100",
    //   image: [sepatu],
    //   stock: "1",
    //   description:
    //     "Sepatu adalah salah satu jenis alas kaki (footwear) yang biasanya terdiri atas bagian-bagian sol, hak, kap, tali, dan lidah.",
    //   how_to_use: [
    //     "Pilih sepatu yang sesuai dengan aktivitas yang akan dilakukan.",
    //     "Gunakan kaus kaki yang bersih dan nyaman.",
    //     "Masukkan kaki ke dalam sepatu dan pastikan ukurannya pas.",
    //     "Kencangkan tali sepatu dengan kencang tetapi tidak terlalu ketat.",
    //     "Uji sepatu di area yang datar sebelum digunakan untuk aktivitas intensif.",
    //   ],
    // },
    // {
    //   key: "3",
    //   product_name: "Tracking Pole",
    //   product_category: "Gunung",
    //   product_type: ["10", "11", "12"],
    //   price: "100000",
    //   image: [trackingPole],
    //   stock: "10",
    //   description:
    //     "Alat ini sangat berguna selama hiking atau dijalanan menanjak, dimana beban kaki bisa kita bagi ke tracking pole melalui tumpuan tangan. Sehingga membantu mengurangi resiko cedera otot kaki dan terkilir/keseleo.",
    //   how_to_use: [
    //     "Pilih tracking pole yang sesuai dengan tinggi tubuh.",
    //     "Pegang tracking pole dengan benar, dengan pegangan yang nyaman dan kokoh.",
    //     "Tempatkan tracking pole di depan tubuh saat menanjak atau menuruni lereng.",
    //     "Gunakan kedua tracking pole untuk keseimbangan tambahan saat melintasi medan yang sulit.",
    //     "Pastikan untuk membersihkan dan merawat tracking pole setelah digunakan.",
    //   ],
    // },
  ]);

  useEffect(() => {
    getData();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    setLoading(true);
    getListProducts()
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
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

  const deleteData = (id) => {
    confirm({
      title: "Konfirmasi Hapus",
      content:
        "Apakah kamu yakin menghapus data ini? Aksi ini tidak dapat dibatalkan.",
      icon: <ExclamationCircleOutlined />,
    });
  };

  const viewData = (record) => {
    setChildData(record);
    setSection("view");
  };

  const columns = [
    {
      title: "Nama Produk",
      dataIndex: "product_name",
      key: "product_name",
      sorter: (a, b) => a.product_name.localeCompare(b.product_name),
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
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (text, record) => {
        return <span>{text} pcs</span>;
      },
      sorter: (a, b) => a.stock - b.stock,
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
        />
      )}
    </>
  );
}
