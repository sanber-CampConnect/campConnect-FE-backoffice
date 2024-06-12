// FormSection.jsx
import React, { useEffect, useState } from "react";
import {
  Input,
  Col,
  Row,
  Form,
  Upload,
  Button,
  Select,
  Table,
  Modal,
} from "antd";
import { UploadOutlined, EditFilled, DeleteFilled } from "@ant-design/icons";
import { BButton, ButtonBack, FieldButton } from "../../components/atoms/index";
import ProductDetail from "./ProductDetail";
import VariantModal from "./VariantModal";

const { Option } = Select;
const { TextArea } = Input;

export default function FormSection(props) {
  const { setSection, section, childData } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [listVariantProduct, setListVariant] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [variantSection, setVariantSection] = useState("add");
  const [currentVariant, setCurrentVariant] = useState();
  const [productVariants, setProductVariants] = useState([]);

  const addVariant = (variant) => {
    setVariantSection("add");
    setCurrentVariant(null);
    setIsModalVisible(true);
  };

  const addProductVariant = (variant) => {
    setProductVariants([...productVariants, variant]);
  };

  const editVariant = (record) => {
    setVariantSection("edit");
    setCurrentVariant(record);
    setIsModalVisible(true);
  };

  const deleteVariant = (id) => {
    Modal.confirm({
      title: "Konfirmasi Penghapusan",
      content: "Apakah Anda yakin ingin menghapus varian ini?",
      okText: "Ya",
      cancelText: "Tidak",
      onOk: () => {
        setListVariant((prev) => prev.filter((item) => item.id !== id));
      },
    });
  };

  useEffect(() => {
    if (section === "edit" && childData) {
      form.setFieldsValue({
        product_name: childData.product_name,
        price: childData.price,
        stock: childData.stock,
        product_category: childData.product_category,
        product_type: childData.product_type,
        description: childData.description,
        image: childData.image,
      });
    } else {
      form.resetFields();
    }
  }, [section, childData, form]);

  const categories = ["Gunung", "Kemah", "Alat makan"];

  const onFinish = (values) => {
    const formData = { ...values, productVariants };
    console.log("Form Data:", formData);
  };

  const variantColumn = [
    {
      title: "Nama Variant",
      dataIndex: "variant_name",
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Action",
      dataIndex: "",
      render: (text, record) => (
        <div className="flex items-center gap-x-1">
          <BButton
            className="py-1 rounded-lg hover:border-primary"
            icon={<EditFilled className="text-gray-600 hover:text-primary" />}
            onClick={() => editVariant(record)}
          />
          <BButton
            className="py-1 rounded-lg hover:border-primary"
            icon={<DeleteFilled className="text-gray-600 hover:text-primary" />}
            onClick={() => deleteVariant(record.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content-section">
        <div className="header">
          <div className="flex items-center">
            <ButtonBack onClick={() => setSection("default")} />
            <div className="header-title">
              {section === "add" && "Menambahkan Produk"}
              {section === "view" && "Detail Produk"}
              {section === "edit" && "Edit Produk"}
            </div>
          </div>
        </div>
        {section !== "view" ? (
          <div className="body-with-footer">
            <Form form={form} onFinish={onFinish} layout="vertical">
              <div className="body-content">
                <div className="text-lg font-semibold text-primary py-2">
                  Produk
                </div>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="image"
                      extra="Ukuran file maksimal 1MB dengan format .jpg, jpeg, png"
                      label="Foto Produk"
                      valuePropName="fileList"
                      getValueFromEvent={(e) =>
                        Array.isArray(e)
                          ? e
                          : e && [e.fileList[e.fileList.length - 1]]
                      }
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Upload
                        name="image"
                        listType="picture"
                        maxCount={1}
                        beforeUpload={() => false}
                        fileList={childData.image || []}
                        onChange={({ fileList }) =>
                          form.setFieldsValue({ image: fileList })
                        }
                      >
                        <Button icon={<UploadOutlined />}>
                          Tambahkan Foto Produk
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Nama Produk"
                      name="product_name"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder="Ketikan nama produk" />
                    </Form.Item>
                    <Form.Item
                      label="Harga"
                      name="price"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input
                        addonBefore="Rp."
                        value="price"
                        id="price"
                        placeholder="0"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Kategori Produk"
                      name="product_category"
                      rules={[
                        {
                          required: true,
                          message: "Silakan pilih kategori produk",
                        },
                      ]}
                    >
                      <Select placeholder="Pilih Kategori Produk">
                        {categories.map((category) => (
                          <Option key={category} value={category}>
                            {category}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <div className="fit-scroll py-2">
                      <div className="text-lg font-semibold text-primary py-2">
                        Variant
                      </div>
                      {listVariantProduct.length > 0 && (
                        <Table
                          dataSource={listVariantProduct.filter(
                            (x) => x.action !== "Delete"
                          )}
                          columns={variantColumn}
                          pagination={false}
                          rowKey="id"
                        />
                      )}
                      <FieldButton
                        title="Tambahkan Variant"
                        onClick={addVariant}
                      />
                      <VariantModal
                        section={section}
                        listVariantProduct={listVariantProduct}
                        setListVariant={setListVariant}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                        currentVariant={currentVariant}
                        variantSection={variantSection}
                        setProductVariant={addProductVariant} // Kirim fungsi addProductVariant sebagai prop
                      />
                    </div>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      label="Deskripsi Produk"
                      name="description"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <TextArea
                        rows={4}
                        placeholder="Masukkan deskripsi produk"
                        value="description"
                        id="description"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="footer">
                <BButton onClick={() => setSection("default")}>
                  Batalkan
                </BButton>
                <Form.Item type="button">
                  <BButton type="primary" htmlType="submit" loading={loading}>
                    Simpan
                  </BButton>
                </Form.Item>
              </div>
            </Form>
          </div>
        ) : (
          <ProductDetail {...props} />
        )}
      </div>
    </>
  );
}
