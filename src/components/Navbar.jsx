import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink to="/" className="font-semibold">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/team" className="font-semibold">
                    Team
                </NavLink>
            </li>
            <li>
                <NavLink to="/matches" className="font-semibold">
                    Matches
                </NavLink>
            </li>
            <li>
                <NavLink to="/gallery" className="font-semibold">
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className="font-semibold">
                    Stats
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="font-semibold">
                    About
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-4">

            {/* Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Weekend Legends" className="w-10" />
                    <span className="font-bold text-lg hidden md:block">
                        Weekend Legends
                    </span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
            </div>

            {/* Right Side */}
            <div className="navbar-end flex items-center gap-2">
                <ThemeToggle />
                <a
                    href="https://www.facebook.com/messages/t/1669165066499304"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                >
                    Join Group
                </a>
            </div>
        </div>
    );
};

export default Navbar;