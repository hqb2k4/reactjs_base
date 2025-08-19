import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUsersAPI } from '../service/api.service';

const UserPage = () => {
    //useState hook for user table data
    const [dataUsers, setDataUsers] = useState([]);

    //pagination
    const [page, setPage] = useState(1);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);

    //useEffect hook for user table data 
    useEffect(() => {
        fetchAllUser();
    }, [current, page]);

    //fetch all users - asynchronous function
    const fetchAllUser = async () => {
        const res = await fetchAllUsersAPI(current, page);
        if (res && res.data && res.data.result) {
            setDataUsers(res.data.result);
            setCurrent(res.data.meta.current);
            setTotal(res.data.meta.total);
            setPage(res.data.meta.pageSize);
        }
    }

    console.log("checkPageSize", page);

    return (
        <div style={{ padding: '20px' }}>
            <UserForm fetchAllUser={fetchAllUser} />
            <UserTable
                dataUsers={dataUsers}
                fetchAllUser={fetchAllUser}
                current={current}
                total={total}
                page={page}
                setCurrent={setCurrent}
                setPage={setPage}
            />
        </div>
    );
}
export default UserPage;