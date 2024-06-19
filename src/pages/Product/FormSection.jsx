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
  notification,
} from "antd";
import { UploadOutlined, EditFilled, DeleteFilled } from "@ant-design/icons";
import { BButton, ButtonBack, FieldButton } from "../../components/atoms/index";
import ProductDetail from "./ProductDetail";
import VariantModal from "./VariantModal";
import {
  getProductCategories,
  addProduct,
  updateProduct,
  getMediaProduct,
  getProductById,
} from "../../services/api";

const { Option } = Select;
const { TextArea } = Input;

export default function FormSection(props) {
  const { setSection, section, childData, getData } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [listVariantProduct, setListVariant] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [variantSection, setVariantSection] = useState("add");
  const [currentVariant, setCurrentVariant] = useState();
  const [productVariants, setProductVariants] = useState([]);
  const [photoProduct, setPhotoProduct] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [product, setProduct] = useState({});
  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => {
    fetchCategory();
    if (childData.id) {
      fetchProductById();
    }
  }, []);

  const fetchCategory = () => {
    getProductCategories()
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching product category:", err);
      });
  };

  const fetchProductById = () => {
    setLoading(true);
    getProductById(childData.id)
      .then((res) => {
        // console.log(res.data.data);
        setProduct(res.data.data);
        setListVariant(res.data.data.variants || []);
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (section === "edit") {
      const fetchImage = async () => {
        if (childData && childData.image && childData.image.trim() !== "") {
          try {
            const imageUrl = await getMediaProduct(childData.image);
            if (imageUrl) {
              setPhotoProduct([
                {
                  uid: "-1",
                  name: `product image`,
                  status: "done",
                  url: imageUrl,
                },
              ]);
            }
          } catch (error) {
            console.error(error);
          }
        }
      };
      fetchImage();
    }
  }, [childData]);

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
        const updatedListVariant = listVariantProduct.map((item) =>
          item.id === id ? { ...item, action: "Delete" } : item
        );
        setListVariant(updatedListVariant);
        const updatedProductVariants = productVariants.filter(
          (variant) => variant.id !== id
        );
        setProductVariants(updatedProductVariants);
      },
    });
  };

  useEffect(() => {
    if (section === "edit" && childData && product) {
      form.setFieldsValue({
        ...childData,
        image: photoProduct,
        variants: childData.variants,
      });
      setListVariant(product.variants || []);
    } else {
      form.resetFields();
      setListVariant([]);
    }
  }, [section, childData, form, photoProduct]);

  const onFinish = (values) => {
    if (listVariantProduct.length === 0) {
      notification.warning({
        message: "Peringatan",
        description: "Harap tambahkan setidaknya satu varian produk.",
      });
      return;
    }

    const variants = [...listVariantProduct];
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", parseInt(values.price));
    formData.append("category_id", values.category_id);
    formData.append("description", values.description);
    if (imageChanged && uploadedFile) {
      formData.append("image", uploadedFile);
    } else if (!imageChanged && photoProduct.length > 0) {
      formData.append("image", photoProduct[0].url);
    }
    variants.forEach((variant, index) => {
      formData.append(`variants[${index}][name]`, variant.name);
      formData.append(`variants[${index}][stock]`, variant.stock);
    });

    setLoading(true);

    if (section === "add") {
      addProduct(formData)
        .then((res) => {
          if (res) {
            notification.success({
              message: "Sukses",
              description: "Sukses menambahkan produk baru!",
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
    } else if (section === "edit") {
      updateProduct(childData.id, formData)
        .then((res) => {
          if (res) {
            notification.success({
              message: "Sukses",
              description: "Sukses memperbarui produk!",
            });
            setSection("default");
            getData();
          }
        })
        .catch((err) => {
          console.log(err);
          notification.error({
            message: "Gagal",
            description: "Gagal memperbarui produk!",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleUploadChange = ({ fileList }) => {
    setUploadedFile(fileList[0]?.originFileObj || null);
    setImageChanged(true);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
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
                {/* <div className="">
                  <img src={photoProduct} alt="Photo Produk" />
                </div> */}
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="image"
                      extra="Ukuran file maksimal 1MB dengan format .jpg, jpeg, png"
                      label="Foto Produk"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      initialValue={photoProduct}
                      rules={[
                        {
                          required: true,
                          message: "Harap tambahkan foto produk",
                        },
                      ]}
                    >
                      <Upload
                        name="image"
                        listType="picture"
                        maxCount={1}
                        beforeUpload={() => false}
                        onChange={handleUploadChange}
                        fileList={photoProduct}
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
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Silakan masukkan nama produk",
                        },
                      ]}
                    >
                      <Input
                        value="name"
                        id="name"
                        placeholder="Ketikan nama produk"
                      />
                    </Form.Item>
                    <Form.Item
                      label="Harga"
                      name="price"
                      rules={[
                        {
                          required: true,
                          message: "Silakan masukkan harga produk",
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
                      name="category_id"
                      rules={[
                        {
                          required: true,
                          message: "Silakan pilih kategori produk",
                        },
                      ]}
                    >
                      <Select placeholder="Pilih Kategori Produk">
                        {category.map((category) => (
                          <Option key={category.id} value={category.id}>
                            {category.name}
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
                        currentVariant={currentVariant} // Mengirim currentVariant ke VariantModal
                        setProductVariant={setProductVariants}
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
                          message: "Silakan masukkan deskripsi produk",
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
