const ThemeToggle = ({ theme, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
            text-gray-800 dark:text-white 
            hover:bg-gray-100 dark:hover:bg-gray-800 
            transition"
        >
            {theme === "light" ? "🌙 Dark" : "🌞 Light"}
        </button>
    );
};

export default ThemeToggle;