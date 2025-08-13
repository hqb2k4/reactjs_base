import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUsersAPI } from '../service/api.service';

const UserPage = () => {
    //useState hook for user table data
    const [dataUsers, setDataUsers] = useState([]);

    //useEffect hook for user table data 
    useEffect(() => {
        fetchAllUser();
    }, []);

    //fetch all users - asynchronous function
    const fetchAllUser = async () => {
        const res = await fetchAllUsersAPI();
        setDataUsers(res.data);
    }

    return (
        <div style={{ padding: '20px' }}>
            <UserForm fetchAllUser={fetchAllUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    );
}
export default UserPage;