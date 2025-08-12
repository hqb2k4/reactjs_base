import { Button, Input } from 'antd';
const UserForm = () => {
    return (
        <div className='user-form' style={{margin: '20px 0'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div>
                    <span>FullName</span>
                    <Input placeholder="FullName" />
                </div>
                 <div>
                    <span>Email</span>
                    <Input placeholder="Email" />
                </div>
                 <div>
                    <span>Phone</span>
                    <Input placeholder="Phone" />
                </div>
                 <div>
                    <span>Password</span>
                    <Input.Password placeholder="Password" />
                </div>
                <div>
                    <Button type="primary">Creat User</Button>
                </div>
            </div>
        </div>
       
    );
}
export default UserForm;
