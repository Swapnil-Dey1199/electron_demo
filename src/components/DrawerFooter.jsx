import {Button} from 'antd';
import '../styles/drawer-footer.css';

function DrawerFooter() {
    return(
        <div className="footer-wrapper">
            <div style={{order:1}}>
                <Button type="text"style={{fontFamily: 'Aeonik-Bold', fontSize: '12px', color: '#4C5FD0', letterSpacing: '0.5px !important'}}>PREVIEW</Button>
            </div>
            <div style={{order:2}}>
                <Button  className="clear-btn">CLEAR</Button>
                <Button type="primary" className="save-btn">SAVE</Button>
            </div>
        </div>
    );
}

export default DrawerFooter;