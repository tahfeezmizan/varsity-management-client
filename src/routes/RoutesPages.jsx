import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPath } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./students.routes";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <App />,
        children: adminPath
    },
    {
        path: "/faculty",
        element: <App />,
        children: facultyPaths,
    },
    {
        path: "/students",
        element: <App />,
        children: studentPaths,
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