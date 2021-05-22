import { Table } from 'antd';
import '../styles/invoice-table.css';
import CustomIcon from './CustomIcon';
import {
  DownloadOutlined,
  EyeOutlined,
} from '@ant-design/icons';

const columns = [
    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNumber',
      key: 'invoiceNumber',
      render: text => <span style ={{fontFamily:'Aeonik-Medium'}}>{text}</span>
    },
    {
      title: 'Billed To',
      dataIndex: 'billedTo',
      key: 'billedTo',
    },
    {
      title: 'Issued Date',
      dataIndex: 'date',
      key: 'date',
      render: text => <span style ={{fontFamily:'Aeonik-Regular', color: '#9595AD'}}>{text}</span>
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: text => <><span>{text}</span><span style={{fontSize:'9px', fontFamily:'Aeonik-Light', letterSpacing:'0.3px'}}> INR</span></>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: text =>(
        <div>
          <span><CustomIcon isNavIcon={false} icon={<DownloadOutlined/>} prompt="Download Invoice"/></span>
          <span><CustomIcon isNavIcon={false} icon={<EyeOutlined/>} prompt="View Invoice"/></span>
        </div>
      )
    },
  ];
  
  const data = [
    {
      key: '1',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '2',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '3',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '4',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '5',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '6',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '7',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '8',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '9',
      invoiceNumber: '#AD3654',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    },
    {
      key: '10',
      invoiceNumber: '1234_10/2016-17',
      billedTo: 'Shweta Rao',
      date: '26-02-2016',
      amount: '40,000',
      action: 'Download',
    }
  ];

function InvoiceTable() {
    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 6 }} />
    )
}

export default InvoiceTable;