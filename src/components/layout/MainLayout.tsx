import { Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "Dashoard",
    label: <NavLink to={"/admin"}>Dashoard</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Admin",
        label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
      },
      {
        key: "Create Faculty",
        label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
      },
      {
        key: "Create Student",
        label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
      },
    ],
  },
  {
    key: "dasoddfsdfgha",
    label: "User",
  },
];

export default function MainLayout() {
  return (
    <Layout className="h-dvh">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical h-10 text-white flex justify-center items-center">
          <h1>BU Dashboard</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
