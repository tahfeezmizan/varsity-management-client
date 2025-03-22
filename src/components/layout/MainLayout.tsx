import { Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "dasodfgha",
    label: "Dashoard",
  },
  {
    key: "dasodfghgfdgda",
    label: "Admin",
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
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
