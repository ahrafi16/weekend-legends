
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Aos from "aos";

const MainLayout = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // animation duration in ms
            once: true,     // animate only once
        });
    }, []);
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-200px)] urbanist">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;