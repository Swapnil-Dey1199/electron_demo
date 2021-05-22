import '../styles/details-pane.css';
import '../styles/account-card.css';
import { Divider, Button } from 'antd';

function AccountDetailsCard() {
    return (
        <div className="account-details-card">
            <div className="account-top-section">
                <div style={{fontFamily: 'Aeonik-Regular', color: 'black', fontSize: '16px', letterSpacing: '1px'}}> 
                    Outstanding Invoices
                </div>
            </div>
            <div className="account-second-section">
                <div style={{fontFamily: 'Aeonik-Light', color: 'black', fontSize: '12px', letterSpacing: '0.75px'}}> 
                    Amount
                </div>
                <div> 
                    <span style={{fontFamily: 'Aeonik-Medium', color: '#4C5FDE', fontSize: '14px', letterSpacing: '0.75px'}}>
                        20,000.00
                    </span>
                    <span style={{fontFamily: 'Aeonik-Regular', color: '#4C5FDE', fontSize: '10px', letterSpacing: '0.75px', paddingLeft: '5px'}}>
                        INR
                    </span>
                </div>
            </div>
            <div className="account-third-section">
                <div className="account-detail-wrapper" style={{order:1}}>
                    <div className="account-detail-label">
                        Invoice Number
                    </div>
                    <div className="account-detail-value">
                        1234/2016-17
                    </div>
                </div>
                <div className="account-detail-wrapper" style={{order:2}}>
                    <div className="account-detail-label">
                        Due Date
                    </div>
                    <div className="account-detail-value">
                        26-02-2017
                    </div>
                </div>
            </div>
            <div className="account-bottom-section">
                <Button size='large' style={{backgroundColor: '#4C5FD0', color: 'white', borderRadius: '10px', width: '100%'}}
                    >
                    <span style={{fontFamily: 'Aeonik-Regular'}}>Pay Now</span>
                </Button>
            </div>
        </div>
    )
}

export default AccountDetailsCard;