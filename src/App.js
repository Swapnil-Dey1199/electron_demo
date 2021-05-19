import { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  ReconciliationOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const CustomTrigger = () => (
  <div style={{ backgroundColor: '#1433BB' }}>
    <h1>trigger</h1>
  </div>
);

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        className="sider-theme"
        trigger={<CustomTrigger />}
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(state) => { setCollapsed(state) }}>
        <div className="logo" />
        <Menu className="menu-theme" theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<AppstoreOutlined style={{ fontSize: '24px' }} />}>
            DASHBOARD
          </Menu.Item>
          <Menu.Item key="2" icon={<ReconciliationOutlined style={{ fontSize: '24px' }} />}>
            INVENTORY
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout-background">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content className="site-layout-content">

        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;
