import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../styles/dashboard.css'
import InvoiceTable from './InvoiceTable';
import NewInvoiceButton from './NewInvoiceButton';
function Dashboard() {
    return (
        <>
            <Row>
                <Col
                    span={18}
                    style={{ fontFamily: 'Aeonik-Bold' }}>
                    <span style={{ fontSize: '24px' }}>Your Dashboard</span>
                    <span style={{ fontFamily: 'Aeonik-Medium', fontSize: '10px', color: '#9595AD', paddingLeft: '24px' }}>18 Aug 2020, Thursday</span>
                </Col>
                <Col
                    span={6}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ order: 1 }}>
                        <Input size="small" placeholder="Search for an invoice..." suffix={<SearchOutlined />} />
                    </div>
                </Col>
            </Row>
            <Row style={{ paddingTop: '30px' }}>
                <Col
                    span={18}>
                    <span style={{ fontFamily: 'Aeonik-Medium', fontSize: '18px' }}>Invoices</span>
                    <br/>
                    <span style={{ paddingTop: '2.5px', fontFamily: 'Aeonik-Light', fontSize: '12px', color: '#9595AD', letterSpacing: '0.25px' }}>List of all your transactions</span>
                </Col>
                <Col
                    span={6}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'right' }}>
                    <NewInvoiceButton/>
                </Col>
            </Row>
            <Row style={{ paddingTop: '5px' }}>
                <Col span={24}>
                    <InvoiceTable />
                </Col>
            </Row>
        </>
    )
}

export default Dashboard;