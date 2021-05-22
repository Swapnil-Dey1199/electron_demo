import '../styles/details-pane.css';
import '../styles/company-card.css';
import { Divider } from 'antd';

function CompanyDetailsCard() {
    return (
        <div className="company-details-card">
            <div className="company-top-section">
                <div style={{fontFamily: 'Aeonik-Thin', color: 'white', fontSize: '12px', paddingBottom: '10px'}}>
                     Your Details
                </div>
                <div style={{fontFamily: 'Aeonik-Light', color: 'white', fontSize: '16px', letterSpacing: '1px', paddingBottom: '0px'}}> 
                    RS Innovations
                </div>
                <Divider dashed style = {{borderColor : 'rgba(255, 255, 255, 1)'}} />
            </div>
            <div className="company-bottom-section">
                <div className="company-detail-wrapper" style={{order:1}}>
                    <div className="company-detail-label">
                        GSTIN
                    </div>
                    <div className="company-detail-value">
                        19ABTPL2536J1Z4
                    </div>
                </div>
                <div className="company-detail-wrapper" style={{order:2}}>
                    <div className="company-detail-label">
                        Address
                    </div>
                    <div className="company-detail-value">
                        514, Centre Point,<br/>21, Hemanta Basu Sarani,<br/>Kolkata - 700001
                    </div>
                </div>
                <div className="company-detail-wrapper" style={{order:3}}>
                    <div className="company-detail-label">
                        Email
                    </div>
                    <div className="company-detail-value">
                        cermaiqueinds@gmail.com
                    </div>
                </div>
                <div className="company-detail-wrapper" style={{order:4}}>
                    <div className="company-detail-label">
                        Phone Number
                    </div>
                    <div className="company-detail-value">
                        033-2662 3680
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetailsCard;