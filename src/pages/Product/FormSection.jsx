import React, { useEffect, useState } from "react";
import { Input, Col, Row, Form, Upload, Button, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { BButton, ButtonBack } from "../../components/atoms/index";
import ProductDetail from "./ProductDetail";

const { Option } = Select;
const { TextArea } = Input;

export default function FormSection(props) {
  const { setSection, section, childData } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
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
            <Form form={form} layout="vertical">
              <div className="body-content">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="image"
                      extra="Ukuran file maksimal 1MB dengan format .jpg, jpeg, png"
                      label="Foto Produk"
                      valuePropName="fileList"
                      getValueFromEvent={(e) =>
                        Array.isArray(e) ? e : e && e.fileList
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
                        maxCount={3}
                        beforeUpload={() => false}
                      >
                        <Button icon={<UploadOutlined />}>
                          Tambahkan Foto Produk
                        </Button>
                      </Upload>
                    </Form.Item>
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
                        {childData.product_category && (
                          <Option value={childData.product_category}>
                            {childData.product_category}
                          </Option>
                        )}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Jenis Produk"
                      name="product_type"
                      rules={[
                        {
                          required: true,
                          message: "Silakan pilih jenis produk",
                        },
                      ]}
                    >
                      <Select placeholder="Pilih Jenis Produk">
                        {childData.product_type &&
                          childData.product_type.map((type) => (
                            <Option key={type} value={type}>
                              {type}
                            </Option>
                          ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Stok"
                      name="stock"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input
                        addonAfter="pcs"
                        value="stock"
                        id="stock"
                        placeholder="0"
                      />
                    </Form.Item>
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
