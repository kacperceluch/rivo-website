import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../assets/Rivo-logo.svg";
import { ReactComponent as CartIcon } from "../assets/cart-icon.svg";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setActive(!active);
    };

    const closeMenu = () => {
        setActive(false);
    };

    useEffect(() => {
        if (window.innerWidth <=1200) {
            setActive(false);
        }
    }, []);

    return (
        <nav>
            <div className="nav-container">
                <Logo />
                <ul className={`${active ? "active" : ""}`}>
                    <li>
                        <Link
                            onClick={closeMenu}
                            smooth={true}
                            spy={true}
                            offset={-70}
                            duration={active ? 0 : 500}
                            to="heroSection"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            smooth={true}
                            spy={true}
                            offset={active ? -120 : -220}
                            duration={active ? 0 : 500}
                            to="shopSection"
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                        Features
                    </li>
                    <li>
                        Contact
                    </li>
                    <li className="login-mobile">
                        Login
                    </li>
                </ul>
                <div className="nav-right">
                    <div className="cart-icon">
                        <CartIcon />
                        <span className="dot"></span>
                    </div>
                    <div className="secondary-btn login">Login</div>
                    <a
                        className={`menu ${active ? "menu-active" : ""}`}
                        onClick={toggleNav}
                    >
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                    </a>
                </div>
  
            </div>
        </nav>
    )
}

export default Navbar;