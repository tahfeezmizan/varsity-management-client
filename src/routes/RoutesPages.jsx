import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminLayout from "../components/layout/AdminLayout";
import FacultyLayout from "../components/layout/FacultyLayout";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },

        ],
    },
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                index: true,
                // path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "create-student",
                element: <CreateStudent />,
            },

        ],
    },
    {
        path: "/faculty",
        element: <App />,
        children: [
            {
                index: true,
                // path: "dashboard",
                element: <FacultyDashboard />,
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },


]);

export default routes;