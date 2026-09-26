
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Aos from "aos";

const MainLayout = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        Aos.init({
            duration: 1000, // animation duration in ms
            once: true,     // animate only once
        });
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <Navbar theme={theme} onToggleTheme={() => setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")} />
            <div className="min-h-[calc(100vh-200px)] urbanist bg-white text-black dark:bg-gray-900 dark:text-white">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;