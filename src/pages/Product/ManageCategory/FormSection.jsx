import React, { useState, useEffect } from "react";
import { Input, Col, Row, Form, Select } from "antd";
import { BButton, ButtonBack } from "../../../components/atoms/index";

const { TextArea } = Input;

export default function FormSection(props) {
  const { setSection, section, childData } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (section === "edit" && childData) {
      form.setFieldsValue({
        category_name: childData.category_name,
        description: childData.description,
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
              {section === "add" && "Menambahkan Kategori Produk"}
              {section === "edit" && "Edit Kategori Produk"}
            </div>
          </div>
        </div>
        <div className="body-with-footer">
          <Form form={form} layout="vertical">
            <div className="body-content">
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    label="Nama Kategori Produk"
                    name="category_name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Ketikan nama kategori" />
                  </Form.Item>
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
              <BButton onClick={() => setSection("default")}>Batalkan</BButton>
              <Form.Item type="button">
                <BButton type="primary" htmlType="submit" loading={loading}>
                  Simpan
                </BButton>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
