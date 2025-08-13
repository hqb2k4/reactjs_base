import { Space, Table, Tag } from 'antd';
import { fetchAllUsersAPI } from '../../service/api.service';
import { useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const fetchAllUser = async () => {
        const res = await fetchAllUsersAPI();
        setDataUsers(res.data);
        // console.log("Response data:", res.data);
        console.log("All users:", res);
    }
    fetchAllUser();
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
        <Table columns={columns} dataSource={dataUsers} />
    );
}
export default UserTable;