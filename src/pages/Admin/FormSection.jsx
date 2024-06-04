import React, { useEffect, useState } from "react";
import { Input, Col, Row, Form } from "antd";
import { BButton, ButtonBack } from "../../components/atoms/index";

export default function FormSection(props) {
  const { setSection, section, childData } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (section === "edit" && childData) {
      form.setFieldsValue({
        name: childData.name,
        email: childData.email,
        phone_number: childData.handphone.replace("+62", ""),
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
              {section === "add" && "Menambahkan Admin"}
              {section === "view" && "Detail"}
              {section === "edit" && "Edit Admin"}
            </div>
          </div>
        </div>
        <div className="body-with-footer">
          <Form
            form={form}
            // onFinish={onFinish}
            layout="vertical"
            // validateMessages={validateMessage}
          >
            <div className="body-content">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Nama Lengkap"
                    name="name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Ketikan nama lengkap" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="Ketikan alamat email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Nomor Handphone"
                    name="phone_number"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        min: 8,
                        message: "Minimal 8 angka!",
                      },
                      {
                        max: 13,
                        message: "Maksimal 13 angka!",
                      },
                      {
                        pattern: new RegExp(/^8/gi),
                        message: "Nomor harus diawali angka 8!",
                      },
                    ]}
                    onChange={(e) =>
                      form.setFieldsValue({
                        ...form.getFieldsValue,
                        phone_number: e.target.value.replace(/^0/gi, ""),
                      })
                    }
                    onKeyPress={(event) => {
                      console.log(event);
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <Input
                      placeholder="Ketikan nomor handphone"
                      addonBefore="+62"
                      maxLength={13}
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
