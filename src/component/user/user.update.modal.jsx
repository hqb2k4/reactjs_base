import { Button, Input, notification, Modal } from 'antd';
import {updateUserAPI } from '../../service/api.service';
import { useEffect, useState } from 'react';

const UpdateUserModal = ({ isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, fetchAllUser }) => {
    //useState Hook UserForm
    const [id, setID] = useState();
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [api, contextHolder] = notification.useNotification();

    //useEffect
    useEffect(() => {
        if (dataUpdate) {
            setID(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setEmail(dataUpdate.email);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate]);

    // Reset and Close Modal
    const resetAndCloseModal = () => {
        setID('');
        setFullName('');
        setEmail('');
        setPhone('');
        setIsModalUpdateOpen(false);
        setDataUpdate(null);
    };

    const handleBtnOkOnClick = async () => {
        try {
            const res = await updateUserAPI(id, fullName, email, phone);
            //Optional Chaining ?. 
            if (res.data) {
                api.success({
                    message: 'User updated successfully',
                    description: `User updated successfully!`,
                });
                // console.log("User updated successfully:", res.data);
                await fetchAllUser();
            }
        } catch (err) {
            api.error({
                message: 'Update user failed' + err.message,
                description: `Error: ${JSON.stringify(err.response.data.message)}`,
            });
        }
        resetAndCloseModal();
    };

    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={handleBtnOkOnClick}
            onCancel={resetAndCloseModal}
            maskClosable={false}
            okText={"Save"}
        >
            <div className='user-form' style={{ margin: '20px 0' }}>
                {contextHolder}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>
                        <span>ID</span>
                        <Input
                            placeholder="ID"
                            value={id}
                            disabled
                            onChange={(event) => { setID(event.target.value) }}
                        />
                    </div>
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
    )
}
export default UpdateUserModal;