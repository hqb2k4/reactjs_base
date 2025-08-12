import { Link } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/production">Production</Link></li>
        </ul>
    );
}
export default Header;