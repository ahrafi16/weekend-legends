import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import Team from "../pages/Team";
// import Matches from "../pages/Matches";
import Gallery from "../pages/Gallery";
// import Stats from "../pages/Stats";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/team",
                element: <Team />,
            },
            //   {
            //     path: "/matches",
            //     element: <Matches />,
            //   },
            {
                path: "/gallery",
                element: <Gallery />,
            },
            //   {
            //     path: "/stats",
            //     element: <Stats />,
            //   },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default router;