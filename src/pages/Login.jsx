import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { Link } from 'react-router';

const LoginPage = () => {
    const [formLogin] = Form.useForm();
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
                <Form
                    layout="vertical"
                    form={formLogin}
                    // onFinish={onFinish}
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
                            <Button type="primary" htmlType="submit">
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