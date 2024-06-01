import React, { useRef, useEffect } from "react";
import { Form, Input } from "antd";
import { BButton } from "../../components/atoms";
import logo from "../../assets/icons/main-logo.png";
import { CheckCircleFilled } from "@ant-design/icons";

export default function SettingPassword() {
    const [form] = Form.useForm();
    const passwordRef = useRef(null);

    useEffect(() => {
        passwordRef.current.focus();
    }, []);

    return (
        <div className="flex justify-center items-center h-full">
            <div className="card shadow-lg bg-white rounded-lg px-5 py-3 w-80">
                <img src={logo} alt="logo" className="h-10" />
                <h3 className="text-lg text-gray-700 font-semibold pt-3 pb-3">
                    Atur Kata Sandi
                </h3>
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="password"
                        label="Kata Sandi Baru"
                        rules={[{ required: true }]}
                    >
                        <Input.Password
                            placeholder="Ketikan kata sandi baru"
                            ref={passwordRef}
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Ulangi Kata Sandi Baru"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Konfirmasi kata sandi baru harus diisi",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error("Kata sandi tidak sama!")
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Ketikan ulang kata sandi baru" />
                    </Form.Item>
                    <div className="mb-4">
                        <div className="text-gray-600 text-sm flex items-center gap-2 mb-3">
                            <CheckCircleFilled className="mt-[1px]" />
                            <span>Kata sandi harus mengandung 8 karakter</span>
                        </div>
                        <div className="text-gray-600 text-sm flex items-start gap-2">
                            <CheckCircleFilled className="mt-[3px]" />
                            <span>
                                Kombinasi huruf besar, huruf kecil, angka, dan
                                karakter spesial.
                            </span>
                        </div>
                    </div>
                    <Form.Item shouldUpdate>
                        {() => (
                            <BButton
                                type="primary"
                                htmlType="submit"
                                customclass="w-full"
                            >
                                Perbarui Kata Sandi
                            </BButton>
                        )}
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
