import { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import logo from './resources/logo.png'
import { Layout, Menu, Space } from 'antd';
import {
  ReconciliationOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import Dashboard from './components/Dashboard';
import DetailsPane from './components/DetailsPane';
import CustomIcon from './components/CustomIcon';

const { Header, Content, Footer, Sider } = Layout;

const getPage = page => {
  switch (page) {
    case '1':
      return <Dashboard />
    default:
      return <div>{page}</div>
  }
}

function App() {

  const [page, setPage] = useState('1')

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        className="left-sidebar"
        trigger={null}
        theme="light">
        <div className="logo">
          <img src={logo} height='58px' />
        </div>
        <Menu
          className="menu-theme"
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={({ key }) => setPage(key)}>
          <Menu.Item
            key="1"
            style={{height:'42px'}}
            icon={ <CustomIcon isNavIcon={true} icon={<AppstoreOutlined/>}/>}>
            DASHBOARD
          </Menu.Item>
          <Menu.Item
            key="2"
            style={{height:'42px'}}
            icon={ <CustomIcon isNavIcon={true} icon={<ReconciliationOutlined/>}/>}>
            INVENTORY
          </Menu.Item>
          {/* <Menu.Item
            className="custom-selected"
            key="3"
            icon={<ReconciliationOutlined style={{ fontSize: '24px', padding: '0px 12px 0px' }} />}>
            INVENTORY
          </Menu.Item>
          <Menu.Item
            className="custom-selected"
            key="4"
            icon={<ReconciliationOutlined style={{ fontSize: '24px', padding: '0px 12px 0px' }} />}>
            INVENTORY
            </Menu.Item>
          <Menu.Item
            className="custom-selected"
            key="5"
            icon={<ReconciliationOutlined style={{ fontSize: '24px', padding: '0px 12px 0px' }} />}>
            INVENTORY
            </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout >
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content className="site-layout-content">
          {getPage(page)}
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
      <Sider
        className="right-sidebar"
        trigger={null}
        theme="light">
        <DetailsPane />
      </Sider>
    </Layout>
  );
}

export default App;
