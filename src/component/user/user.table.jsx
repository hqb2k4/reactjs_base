import { Space, Table, Tag } from 'antd';
import { fetchAllUsersAPI } from '../../service/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    //useState hook
    const [dataUsers, setDataUsers] = useState([]);

    //useEffect hook
    useEffect(() => {
            fetchAllUser();
    }, []);

    //fetch all users - asynchronous function
    const fetchAllUser = async () => {
        const res = await fetchAllUsersAPI(); 
        setDataUsers(res.data);
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
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
    ];
    return (
        <Table columns={columns} dataSource={dataUsers} rowKey="_id" />
    );
}
export default UserTable;