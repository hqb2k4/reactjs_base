import { Button, Form, Input, notification, Typography } from "antd";
import { useState } from "react";
import { registerUserAPI } from "../service/api.service";
import { useNavigate } from "react-router";

const { Title } = Typography;

const RegisterPage = () => {
    const [formRegister] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await registerUserAPI(
                values.fullname,
                values.email,
                values.password,
                values.phone
            );

            if (res.data) {
                api.success({
                    message: "User registered successfully",
                    description: `User ${res.data.fullName} registered successfully!`,
                });
                formRegister.resetFields();
                navigate("/login");
            }
        } catch (error) {
            api.error({
                message: "Register user failed",
                description: `Error: ${error.response?.data?.message || error.message || "Unknown error"
                    }`,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
                padding: "20px",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    padding: "30px 25px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    width: "90%", // responsive trên mobile
                    maxWidth: "500px",
                    margin: "0 auto",
                }}
            >
                {contextHolder}
                <Title
                    level={3}
                    style={{ textAlign: "center", marginBottom: "20px", fontWeight: "600" }}
                >
                    Create Account
                </Title>

                <Form
                    layout="vertical"
                    form={formRegister}
                    onFinish={onFinish}
                    requiredMark={false}
                    style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                    {/* Full Name */}
                    <Form.Item
                        label="Full Name"
                        name="fullname"
                        rules={[
                            { required: true, message: "Please input your full name!" },
                            { min: 3, message: "Full name must be at least 3 characters" },
                            {
                                pattern: /^[a-zA-Z\s]+$/,
                                message: "Full name must not contain special characters",
                            },
                        ]}
                    >
                        <Input placeholder="Enter your full name" />
                    </Form.Item>

                    {/* Email */}
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { type: "email", message: "Invalid email format!" },
                        ]}
                    >
                        <Input placeholder="Enter your email" />
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: "Please input your password!" },
                            {
                                pattern:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                message:
                                    "Password must be at least 6 chars, include uppercase, lowercase, number, and special char",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    {/* Confirm Password */}
                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            { required: true, message: "Please confirm your password!" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("Passwords do not match!"));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm your password" />
                    </Form.Item>

                    {/* Phone */}
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            { required: true, message: "Please input your phone number!" },
                            {
                                pattern: /^[0-9]{9,11}$/,
                                message: "Phone must be 9-11 digits",
                            },
                        ]}
                    >
                        <Input placeholder="Enter your phone number" />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item style={{ marginTop: "10px" }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            block
                            style={{
                                height: "42px",
                                borderRadius: "8px",
                                fontWeight: "500",
                            }}
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;
