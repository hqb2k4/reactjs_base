import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table} from 'antd';
import UpdateUserModal from './user.update.modal';
import { useState } from 'react';
import UserViewDetail from './user.view.detail';
import { deleteUserAPI } from '../../service/api.service';

// Use props
const UserTable = ({ dataUsers, fetchAllUser }) => {

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDataDetail] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [api, contextHolder] = notification.useNotification();

    const handlePopconfirmClick = async (_id) => {
        try {
            const res =  await deleteUserAPI(_id);
            if (res.data) {
                api.success(
                    {
                        message: 'Delete User',
                        description: `User with ID ${_id} deleted successfully!`,
                    }
                );
                fetchAllUser();
            }
        } catch (error) {
            api.error(
                {
                    message: 'Delete User',
                    description: `Failed to delete user with ID ${_id} - ${error.response.data.message}`,
                }
            );
            console.error('Error deleting user:', error);
        }
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a href='#' onClick={() => {
                        setIsDrawerOpen(true);
                        setDataDetail(record);
                    }}>{record._id}</a>
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
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={(e) => {
                                console.log(e);
                                handlePopconfirmClick(record._id);
                            }}
                            onCancel={(e) => {
                                console.log(e);
                            }}
                            okText="Yes"
                            cancelText="No"
                            placement='left'
                        >
                            <DeleteOutlined style={{ cursor: 'pointer', color: 'red' }} />
                        </Popconfirm>      
                    </div>
                </>
            ),
        },
    ];

    return (
        <>
            {contextHolder}
            <Table columns={columns} dataSource={dataUsers} rowKey="_id" />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                fetchAllUser={fetchAllUser}
            />
            <UserViewDetail
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                dataDetail={dataDetail}
                fetchAllUser={fetchAllUser}
            />
        </>
    );
}
export default UserTable;