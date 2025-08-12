import { Button, Input, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../service/api.service';
const UserForm = () => {
    //useState Hook UserForm
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [api, contextHolder] = notification.useNotification();
    const handleOnClick = async () => {
        try {
            const res = await createUserAPI(fullName, email, password, phone);
            //Optional Chaining ?. 
            if (res.data) {
                api.success({
                    message: 'User created successfully',
                    description: `User ${res.data.fullName} created successfully!`,
                });
                console.log("User created successfully:", res.data);
            }
        } catch (err) {
            api.error({
                message: 'Create user failed',
                description: err.message,
            });
        }
    };
    return (
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
                <div>
                    <Button type="primary" onClick={handleOnClick}>
                        Creat User
                    </Button>
                </div>
            </div>
        </div >

    );
}
export default UserForm;
