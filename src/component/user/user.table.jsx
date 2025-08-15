import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import UpdateUserModal from './user.update.modal';
import { useState } from 'react';

// Use props
const UserTable = ({ dataUsers, fetchAllUser }) => {

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a href='#'>{record._id}</a>
                </>
            ),
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <EditOutlined
                            onClick={() => { 
                                setIsModalUpdateOpen(true) 
                                setDataUpdate(record);
                            }}
                            style={{ cursor: 'pointer', color: 'orange' }}
                        />
                        <DeleteOutlined style={{ cursor: 'pointer', color: 'red' }} />
                    </div>
                </>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey="_id" />
            <UpdateUserModal 
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                fetchAllUser={fetchAllUser}
            />
        </>
    );
}
export default UserTable;