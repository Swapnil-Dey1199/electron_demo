import SupportAnimation from './SupportAnimation';
import { useState } from 'react';
import { Button } from 'antd';

function SupportSection() {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ order: 2, padding: '0px 24px 24px' }} >
            <SupportAnimation hover={hover} />
            <div className="support-wrapper">
                <div style={{ order: '1', fontFamily: 'Aeonik-Bold', fontSize: '12px', paddingTop: '10px' }}>
                    Do you have a question?
            </div>
                <div style={{ order: '2', paddingBottom: '10px' }}>
                    <Button className='email-button'>Email Us</Button>
                </div>
            </div>
        </div>
    )
}

export default SupportSection;