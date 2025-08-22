import { Button, Checkbox, Divider, Form, Input, notification } from 'antd';
import { Link, Navigate, useNavigate } from 'react-router';
import { loginUserAPI } from '../service/api.service';
import { useState } from 'react';

const LoginPage = () => {
    const [formLogin] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();
    const [isloading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await loginUserAPI(values.email, values.password);

            if (res.data) {
                api.success({
                    message: "Login successful",
                    description: `Welcome back, ${res.data.user.fullName}!`,
                });
                formLogin.resetFields();
                navigate("/users"); 
            }
        } catch (error) {
            api.error({
                message: "Login failed",
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
                <Form
                    layout="vertical"
                    form={formLogin}
                    onFinish={onFinish}
                    requiredMark={false}
                    style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { type: "email", message: "Invalid email format!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" loading={isloading}>
                                Submit
                            </Button>
                        </Form.Item>
                        <Link to="/">Go to home page</Link>
                    </div>

                    <Divider></Divider>

                    <div
                        style={{
                            marginTop: "12px",
                            textAlign: "center",
                        }}
                    >
                        <span>Don't You have an Account?<Link to="/register">Register</Link></span>
                    </div>
                </Form>
            </div>
        </div>
    );
}
export default LoginPage;