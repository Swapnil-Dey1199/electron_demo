import '../styles/details-pane.css';
import AccountDetailsCard from './AccountDetailsCard';
import CustomerDetailsCard from './CompanyDetailsCard';

function DetailsPane() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}  >
            <CustomerDetailsCard/>
            <AccountDetailsCard/>
        </div>
    )
}

export default DetailsPane;