import "./Nav.scss";
const Nav = () => {
    return (<nav className="nav">
        <h2>git flow</h2>
        <div className="nav__links">
            <a className="nav__link">
                Link 1
            </a>
            <a className="nav__link">
                Link 2
            </a>
            <a className="nav__link">
                Link 3
            </a>
        </div>
    </nav >);
};

export default Nav;