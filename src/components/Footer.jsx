import { FaUtensils } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <Panel />
            <Copyright />
        </footer>
    );
};

const Panel = () => {
    function changeLocation(location) {
        window.location = `./${location}.html`;
    }

    return (
        <div className="panel">
            <div className="panel-logo flex">
                <FaUtensils />
            </div>

            <div className="locations flex">
                <div className="location">
                    <p>Royal Street, Khwisero</p>
                    <p>+2547 00 123 456</p>
                </div>
                <div className="location">
                    <p>Kenyatta Avenue, Nairobi</p>
                    <p>+2547 98 765 432</p>
                </div>
            </div>

            <div className="nav">
                <ul>
                    <li>
                        <a href="./">Rooms</a>
                    </li>
                    <li>
                        <a href="./" onClick={() => changeLocation("dining")}>
                            Dining
                        </a>
                    </li>
                    <li>
                        <a href="./" onClick={() => changeLocation("about")}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="./" onClick={() => changeLocation("contact")}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="./" onClick={() => changeLocation("book")}>
                            Book
                        </a>
                    </li>
                </ul>
            </div>

            <div className="social">
                <ul>
                    <li>
                        <a href="./">Facebook</a>
                    </li>
                    <li>
                        <a href="./">Twitter</a>
                    </li>
                    <li>
                        <a href="./">Instagram</a>
                    </li>
                </ul>
            </div>

            <div className="branches">
                <ul>
                    <li>
                        <a href="./">Khwisero</a>
                    </li>
                    <li>
                        <a href="./">Nairobi</a>
                    </li>
                    <li>
                        <a href="./">Mombasa</a>
                    </li>
                    <li>
                        <a href="./">Kisumu</a>
                    </li>
                    <li>
                        <a href="./">Nakuru</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const Copyright = () => {
    return (
        <div className="copyright flex">
            <p>
                &copy; <span id="yr"></span> | All Right Reserved{" "}
            </p>
        </div>
    );
};

export default Footer;
