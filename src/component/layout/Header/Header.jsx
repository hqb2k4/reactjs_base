import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/production">Production</NavLink></li>
        </ul>
    );
}
export default Header;