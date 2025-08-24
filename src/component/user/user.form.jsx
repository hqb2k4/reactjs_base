import { Button, Input, notification, Modal } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../service/api.service';
const UserForm = ({ fetchAllUser }) => {
    //useState Hook UserForm
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [api, contextHolder] = notification.useNotification();

    //useState Hook Modal Antd
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Reset and Close Modal
    const resetAndCloseModal = () => {
        setFullName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setIsModalOpen(false);
    };

    const handleBtnCreateOnClick = async () => {
        try {
            const res = await createUserAPI(fullName, email, password, phone);
            //Optional Chaining ?. 
            if (res.data) {
                api.success({
                    message: 'User created successfully',
                    description: `User ${res.data.fullName} created successfully!`,
                });
                // console.log("User created successfully:", res.data);
                await fetchAllUser();
            }
        } catch (err) {
            api.error({
                message: 'Create user failed' + err.message,
                description: `Error: ${JSON.stringify(err.response.data.message)}`,
            });
        }
        resetAndCloseModal();
    };
    return (
        <>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleBtnCreateOnClick}
                okText={"Create"}
                onCancel={resetAndCloseModal}
                maskClosable={false}
            >
                <div className='user-form' style={{ margin: '20px 0' }}>
                    {contextHolder}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <span>FullName</span>
                            <Input
                                placeholder="FullName"
                                // props value UserForm to Input
                                value={fullName}
                                onChange={(event) => { setFullName(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                placeholder="Email"
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                placeholder="Password"
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Phone</span>
                            <Input
                                placeholder="Phone"
                                value={phone}
                                onChange={(event) => { setPhone(event.target.value) }}
                            />
                        </div>
                    </div>
                </div >
            </Modal>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Table Users</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>
                    Creat User
                </Button>
            </div>
        </>
    );
}
export default UserForm;
