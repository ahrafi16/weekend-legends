
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Aos from "aos";
import { ArrowUp } from "lucide-react";
import "aos/dist/aos.css";

const MainLayout = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [showScrollTop, setShowScrollTop] = useState(false);

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

    useEffect(() => {
        const updateScrollTopVisibility = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        updateScrollTopVisibility();
        window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });

        return () => window.removeEventListener("scroll", updateScrollTopVisibility);
    }, []);

    return (
        <>
            <Navbar theme={theme} onToggleTheme={() => setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")} />
            <div className="min-h-[calc(100vh-200px)] urbanist bg-white text-black dark:bg-gray-900 dark:text-white">
                <Outlet />
            </div>
            <Footer />
            {showScrollTop && (
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                    className="btn btn-primary btn-circle fixed bottom-6 right-6 z-50 shadow-lg"
                >
                    <ArrowUp size={22} aria-hidden="true" />
                </button>
            )}
        </>
    );
};

export default MainLayout;