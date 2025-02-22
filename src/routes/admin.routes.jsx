import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPath = [
    {
        index: true,
        // path: "dashboard",
        element: <AdminDashboard />,
    },

    {
        path: "create-admin",
        element: <CreateAdmin />,
    },
    {
        path: "create-faculty",
        element: <CreateFaculty />,
    },
    {
        path: "create-student",
        element: <CreateStudent />,
    },

]