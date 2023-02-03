import {
    FaUtensils,
    FaBars,
    FaHouseUser,
    FaConciergeBell,
    FaLayerGroup,
    FaEnvelope,
    FaTags,
} from "react-icons/fa";

const Header = () => {
    return (
        <div className="header flex">
            <Logo />
            <MenuButton />
            <Navbar />
        </div>
    );
};

const Logo = () => {
    return (
        <div className="logo">
            <FaUtensils />
        </div>
    );
};

const MenuButton = () => {
    return (
        <button
            className="nav-toggler"
            aria-controls="primary-navigation"
            aria-expanded="false"
        >
            {/* <span className="sr-only">Menu</span> */}
            <FaBars />
        </button>
    );
};

const Navbar = () => {
    function changeLocation(location) {
        window.location = `./${location}.html`;
    }

    return (
        <nav>
            <ul
                data-visible="false"
                id="primary-navigation"
                className="primary-navigation flex"
            >
                <li className="active">
                    <a href="./">
                        <span aria-hidden="true">
                            <FaHouseUser />
                        </span>
                        Rooms
                    </a>
                </li>
                <li>
                    <a href="./" onClick={() => changeLocation("dining")}>
                        <span aria-hidden="true">
                            <FaConciergeBell />
                        </span>
                        Dining
                    </a>
                </li>
                <li>
                    <a href="./" onClick={() => changeLocation("about")}>
                        <span aria-hidden="true">
                            <FaLayerGroup />
                        </span>
                        About
                    </a>
                </li>
                <li>
                    <a href="./" onClick={() => changeLocation("contact")}>
                        <span aria-hidden="true">
                            <FaEnvelope />
                        </span>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="./" onClick={() => changeLocation("book")}>
                        <span aria-hidden="true">
                            <FaTags />
                        </span>
                        Book
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
