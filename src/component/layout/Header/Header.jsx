import { Link, NavLink } from 'react-router';
// import './Header.css'
import { Menu } from 'antd';
import { AppstoreOutlined, HomeFilled, ReadOutlined, TeamOutlined} from '@ant-design/icons';
import { useState } from 'react';
const Header = () => {
    const [current, setCurrent] = useState("");
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeFilled />,
        },
        {
            label: <Link to="/users">Users</Link>,
            key: 'users',
            icon: <TeamOutlined />,
        },
        {
            label: <Link to="/books">Books</Link>,
            key: 'books',
            icon: <ReadOutlined />,
        },
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}
export default Header;