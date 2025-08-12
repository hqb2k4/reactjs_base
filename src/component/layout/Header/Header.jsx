import './Header.css'
const Header = () => {
    return (
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/user">User</a></li>
            <li><a href="/production">Production</a></li>
        </ul>
    );
}
export default Header;