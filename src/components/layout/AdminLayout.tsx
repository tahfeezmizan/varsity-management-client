import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex ">
      <h2 className="text-5xl w-96 bg-amber-100">SideBar</h2>

      <Outlet />
    </div>
  );
}
