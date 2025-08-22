import { Link, NavLink } from 'react-router';
// import './Header.css'
import { Menu } from 'antd';
import { AppstoreOutlined, HomeFilled, ReadOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
const Header = () => {
    const { userLoging } = useContext(AuthContext);
    console.log("userLoging", userLoging);
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
        {
            label: 'Sign In',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Group',
                    children: [
                        { label: <Link to="/login">Sign In</Link>, key: 'SignIn' },
                        { label: <Link to="/register">Sign Up</Link>, key: 'SignUp' },
                    ],
                },
            ],
        },
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}
export default Header;