import { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import logo from './assets/images/logo.png'
import { Layout, Menu } from 'antd';
import {
  ReconciliationOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LineChartOutlined
} from '@ant-design/icons';
import Dashboard from './components/Dashboard';
import DetailsPane from './components/DetailsPane';
import CustomIcon from './components/CustomIcon';
import SupportSection from './components/SupportSection';

const { Content, Sider } = Layout;

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
          <div style={{order: 1}}>
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
          <Menu.Item
            key="3"
            style={{height:'42px'}}
            icon={ <CustomIcon isNavIcon={true} icon={<LineChartOutlined/>}/>}>
            INSIGHTS
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{height:'42px'}}
            icon={ <CustomIcon isNavIcon={true} icon={<SettingOutlined/>}/>}>
            SETTINGS
          </Menu.Item>
        </Menu>
        </div>
        <SupportSection/>
      </Sider>
      <Layout >
        <Content className="site-layout-content">
          {getPage(page)}
        </Content>
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
