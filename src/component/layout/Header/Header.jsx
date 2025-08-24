import { Link, NavLink } from 'react-router';
// import './Header.css'
import { Menu } from 'antd';
import { AliwangwangOutlined, AppstoreOutlined, HomeFilled, LoginOutlined, ReadOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { Children, useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
const Header = () => {
    const { userLoging } = useContext(AuthContext);
    // console.log("userLoging", userLoging);
    const [current, setCurrent] = useState("");
    const onClick = e => {
        // console.log('click ', e);
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
        ...(!userLoging.id ?
            [
                {
                    label: <Link to="/login">Login</Link>,
                    key: 'login',
                    icon: <LoginOutlined />,
                }
            ] : []
        ),
        ...(userLoging.id ?
            [
                {
                    label: `Wellcome ${userLoging.fullName}`,
                    key: 'settings',
                    icon: <AliwangwangOutlined />,
                    children: [
                        {
                            label: "Logout",
                            key: 'logout',
                        }
                    ]
                }
            ] : []
        ),
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}
export default Header;