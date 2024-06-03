import React, { useEffect, useState } from "react";
import { Table, Form, Input, Button, Modal, Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { BButton } from "../../components/atoms/index";
import {
  EyeFilled,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { numberWithCommas } from "../../utils/Helper";
import ProductDetail from "./ProductDetail";
import tendaXL from "../../assets/images/tenda-exl-chanodug.png";
import tenda1L from "../../assets/images/tenda-1l.png";
import tenda2Lkap3 from "../../assets/images/tenda-2l-kap3.png";
import tenda2Lkap4 from "../../assets/images/tenda-2l-kap4.png";
import tenda2Lkap6 from "../../assets/images/tenda-2l-kap6.png";
import tendaUltra from "../../assets/images/tenda-2l-ultralight.png";

export default function ListProduct() {
  const [section, setSection] = useState("default");
  const [childData, setChildData] = useState({});
  const [data, setData] = useState([
    {
      key: "1",
      product_name: "Tenda",
      product_category: "Tenda",
      price: "100000",
      product_type: [
        "Tenda XL",
        "Tenda 1L",
        "Tenda 2L Kap. 3-4 org",
        "Tenda 2L Kap. 4-5 org",
        "Tenda 2L Kap. 6-7 org",
        "Tenda Ultraweight",
      ],
      stock: "10",
      image: [
        tendaXL,
        tenda1L,
        tenda2Lkap3,
        tenda2Lkap4,
        tenda2Lkap6,
        tendaUltra,
      ],
      description:
        "Tenda adalah tempat pelindung yang terdiri dari lembaran kain atau bahan lainnya menutupi yang melekat pada kerangka tiang atau menempel pada tali pendukung. Beberapa tenda tidak perlu berdiri di atas tanah karena ada beberapa model tenda yang menggantung di pohon.",
      how_to_use: [
        "Siapkan tenda dan semua perlengkapan yang diperlukan.",
        "Pilih lokasi yang datar dan aman untuk mendirikan tenda.",
        "Keluarkan tenda dari kantong penyimpanan dan letakkan di lokasi yang telah dipilih.",
        "Rakit kerangka tenda dan pasang tiang penyangga.",
        "Pasang kain tenda pada kerangka dan kencangkan tali-talinya.",
        "Pastikan tenda terpasang dengan kuat dan aman.",
      ],
    },
    {
      key: "2",
      product_name: "Sepatu",
      product_category: "Alas Kaki",
      price: "100",
      stock: "1",
      description:
        "Sepatu adalah salah satu jenis alas kaki (footwear) yang biasanya terdiri atas bagian-bagian sol, hak, kap, tali, dan lidah.",
      how_to_use: [
        "Pilih sepatu yang sesuai dengan aktivitas yang akan dilakukan.",
        "Gunakan kaus kaki yang bersih dan nyaman.",
        "Masukkan kaki ke dalam sepatu dan pastikan ukurannya pas.",
        "Kencangkan tali sepatu dengan kencang tetapi tidak terlalu ketat.",
        "Uji sepatu di area yang datar sebelum digunakan untuk aktivitas intensif.",
      ],
    },
    {
      key: "3",
      product_name: "Tracking Pole",
      product_category: "Gunung",
      price: "100000",
      stock: "10",
      description:
        "Alat ini sangat berguna selama hiking atau dijalanan menanjak, dimana beban kaki bisa kita bagi ke tracking pole melalui tumpuan tangan. Sehingga membantu mengurangi resiko cedera otot kaki dan terkilir/keseleo.",
      how_to_use: [
        "Pilih tracking pole yang sesuai dengan tinggi tubuh.",
        "Pegang tracking pole dengan benar, dengan pegangan yang nyaman dan kokoh.",
        "Tempatkan tracking pole di depan tubuh saat menanjak atau menuruni lereng.",
        "Gunakan kedua tracking pole untuk keseimbangan tambahan saat melintasi medan yang sulit.",
        "Pastikan untuk membersihkan dan merawat tracking pole setelah digunakan.",
      ],
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (section === "default") {
      setChildData({});
    }
  }, [section]);

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
              // onClick={() => editData(record)}
            />
            <BButton
              className="py-1 rounded-lg hover:border-primary"
              icon={
                <DeleteFilled className="text-gray-600 hover:text-primary" />
              }
              // onClick={() => deleteData(record)}
            />
          </div>
        </>
      ),
    },
  ];

  const viewData = (record) => {
    setChildData(record);
    setSection("view");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      setData([...data, { ...values, key: data.length + 1 }]);
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
                onClick={showModal}
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
        <ProductDetail
          childData={childData}
          setSection={setSection}
          section={section}
        />
      )}
      <Modal title="Add Product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item
            name="image"
            label="Upload Image"
            valuePropName="fileList"
            getValueFromEvent={e => Array.isArray(e) ? e : e && e.fileList}
          >
            <Upload
              name="image"
              listType="picture"
              maxCount={1}
              beforeUpload={() => false} // prevent auto upload
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="product_name"
            label="Nama Produk"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="product_category"
            label="Kategori Produk"
            rules={[{ required: true, message: 'Please input the product category!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="stock"
            label="Stock"
            rules={[{ required: true, message: 'Please input the stock!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Deskripsi"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="how_to_use"
            label="Tata Cara Penggunaan"
            rules={[{ required: true, message: 'Please input how to use!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
