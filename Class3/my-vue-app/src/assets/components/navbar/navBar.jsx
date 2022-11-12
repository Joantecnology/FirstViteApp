import './navBar.css'

const NavBar = ({ home, info, exit }) => {
    return (
        <nav>
            <ul>
                <li><a>{home}</a></li>
                <li><a>{info}</a></li>
                <li><a>{exit}</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;