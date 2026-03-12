
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    // Set data-theme on html
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="btn  btn-primary btn-outline"
        >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
};

export default ThemeToggle;