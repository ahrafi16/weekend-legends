import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Team", path: "/team" },
        { name: "Matches", path: "/matches" },
        { name: "Gallery", path: "/gallery" },
        { name: "Stats", path: "/stats" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav className="w-full shadow-md bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Weekend Legends" className="w-10" />
                        <span className="font-bold text-lg text-gray-800 dark:text-white">
                            Weekend Legends
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `font-semibold transition ${isActive
                                            ? "text-blue-600"
                                            : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ThemeToggle />

                        <a
                            href="https://www.facebook.com/messages/t/1669165066499304"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Join Group
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-gray-700 dark:text-white"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="lg:hidden pb-4">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setOpen(false)}
                                        className={({ isActive }) =>
                                            `block font-semibold ${isActive
                                                ? "text-blue-600"
                                                : "text-gray-700 dark:text-gray-200"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 flex items-center gap-4">
                            <ThemeToggle />

                            <a
                                href="https://www.facebook.com/messages/t/1669165066499304"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                            >
                                Join Group
                            </a>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;