import { Space, Table, Tag } from 'antd';

// Use props
const UserTable = ({ dataUsers }) => {

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