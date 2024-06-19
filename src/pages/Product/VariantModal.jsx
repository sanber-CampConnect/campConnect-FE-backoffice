import React, { useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";

const VariantModal = ({
  section,
  listVariantProduct,
  setListVariant,
  isModalVisible,
  setIsModalVisible,
  setProductVariant,
  currentVariant,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (section === "edit" && currentVariant) {
      form.setFieldsValue({
        name: currentVariant.name,
        stock: currentVariant.stock,
      });
    } else {
      form.resetFields();
    }
  }, [section, currentVariant, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      const newVariant = {
        name: values.name,
        stock: values.stock,
      };

      if (section === "edit" && currentVariant) {
        const updatedVariants = listVariantProduct.map((variant) =>
          variant.id === currentVariant.id
            ? { ...variant, ...newVariant }
            : variant
        );
        setListVariant(updatedVariants);
        setProductVariant(newVariant);
      } else {
        setListVariant([...listVariantProduct, newVariant]);
      }

      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };
  // console.log(listVariantProduct);

  return (
    <Modal
      title={section === "edit" ? "Edit Variant" : "Tambah Variant"}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Nama Variant"
          name="name"
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
