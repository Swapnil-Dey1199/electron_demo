import '../styles/custom-icon.css';
import { Tooltip } from 'antd';

function CustomIcon(props) {
    return (
        <Tooltip title={props.prompt} style={{fontFamily:'Aeonik-Light'}}> 
            <div className={props.isNavIcon?'nav-icon-wrapper':'icon-wrapper'}>
                {props.icon}
            </div>
        </Tooltip>
    )
}

export default CustomIcon;