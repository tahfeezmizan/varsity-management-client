import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


const items = [
    {
        key: 'Dashboard',
        label: <NavLink to={"/admin"}>Dashboard</NavLink>,

        children: [
            {
                key: 'Create Admin',
                label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
            },
            {
                key: 'Create Student',
                label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
            },
        ]
    },
    {
        key: '2',
        label: 'Profile',
    },
    {
        key: '3',
        label: 'Settings',
    },
]

export default function MainLayout() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
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
                <div style={{ height: "90px" }} >
                    <h1 style={{ textAlign: "center", fontSize: "3rem", color: 'white', textTransform: "uppercase" }}>Logo</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
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
    )
};
