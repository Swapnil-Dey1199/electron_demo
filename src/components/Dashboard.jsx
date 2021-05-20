import { Row, Col } from 'antd';

function Dashboard() {
    return (
        <>
            <Row>
                <Col 
                    span={24}
                    style = {{ fontFamily : 'Aeonik-Bold'}}>
                    <span style={{fontSize : '24px'}}>Your Dashboard</span>
                    <span style={{fontFamily : 'Aeonik-Medium', fontSize : '10px', color: '#9595AD', paddingLeft : '24px'}}>18 Aug 2020, Thursday</span>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard;