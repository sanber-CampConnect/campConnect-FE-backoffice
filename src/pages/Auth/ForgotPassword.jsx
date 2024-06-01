import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/main-logo.png";

export default function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            notification.success({
                message: "Success",
                description: "Password reset link has been sent to your email.",
            });
            navigate("/auth");
        }, 2000);
    };

    return (
        <>
            <div className="flex justify-center items-center h-full">
                <div
                    className="card shadow-lg bg-white rounded-lg px-5 py-3 w-80"
                    style={{ marginTop: "-190px" }}
                >
                    <img src={logo} alt="logo" className="h-10" />
                    <h3 className="text-lg text-gray-700 font-semibold pt-3 pb-3">
                        Lupa Kata Sandi
                    </h3>
                    <Form form={form} onFinish={onFinish} layout="vertical">
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "Please enter a valid email!",
                                },
                            ]}
                        >
                            <Input placeholder="Ketikan email" />
                        </Form.Item>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    disabled={
                                        !form.isFieldsTouched(true) ||
                                        form
                                            .getFieldsError()
                                            .filter(
                                                ({ errors }) => errors.length
                                            ).length
                                    }
                                    className="w-full text-white"
                                >
                                    Reset Kata Sandi
                                </Button>
                            )}
                        </Form.Item>
                    </Form>
                    <div
                        className="flex items-center cursor-pointer mt-3"
                        onClick={() => navigate("/auth")}
                    >
                        <span className="text-primary ml-0 hover:underline">
                            --{">"} Login Sekarang
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
