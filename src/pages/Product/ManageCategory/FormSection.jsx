import React, { useState, useEffect } from "react";
import { Input, Col, Row, Form, notification } from "antd";
import { BButton, ButtonBack } from "../../../components/atoms/index";
import {
  addProductCategories,
  editProductCategories,
} from "../../../services/api";

const { TextArea } = Input;

export default function FormSection(props) {
  const { setSection, section, childData, getData } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (section === "edit" && childData) {
      form.setFieldsValue({
        name: childData.name,
        // description: childData.description,
      });
    } else {
      form.resetFields();
    }
  }, [section, childData, form]);

  const onFinish = (values) => {
    // const formData = { ...values };
    // console.log("Form Data:", formData);
    setLoading(true);
    if (section === "add") {
      addProductCategories(values)
        .then((res) => {
          if (res) {
            notification.success({
              message: "Sukses",
              description: "Sukses menambahkan kategori produk!",
            });
            setSection("default");
            getData();
          }
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    if (section === "edit") {
      console.log("form edit", values);
      editProductCategories(childData.id, values)
        .then((res) => {
          if (res) {
            notification.success({
              message: "Sukses",
              description: "Sukses mengubah kategori produk!",
            });
            setSection("default");
            getData();
          }
        })
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

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
          <Form form={form} onFinish={onFinish} layout="vertical">
            <div className="body-content">
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    label="Nama Kategori Produk"
                    name="name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Ketikan nama kategori" />
                  </Form.Item>
                  {/* <Form.Item
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
                  </Form.Item> */}
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
