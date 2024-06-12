import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

const VariantModal = ({
  section,
  listVariantProduct,
  setListVariant,
  isModalVisible,
  setIsModalVisible,
  setProductVariant, // Tambahkan prop setProductVariant
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      const newVariant = {
        variant_name: values.variant_name,
        stock: values.stock,
      };
      setListVariant([...listVariantProduct, newVariant]);
      setIsModalVisible(false);
      setProductVariant(newVariant); // Kirim hasil modal ke FormSection
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Tambah Variant"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Nama Variant"
          name="variant_name"
          rules={[{ required: true, message: "Masukkan nama variant" }]}
        >
          <Input placeholder="Nama Variant" />
        </Form.Item>
        <Form.Item
          label="Stok"
          name="stock"
          rules={[{ required: true, message: "Masukkan jumlah stok" }]}
        >
          <Input type="number" placeholder="Stok" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default VariantModal;
