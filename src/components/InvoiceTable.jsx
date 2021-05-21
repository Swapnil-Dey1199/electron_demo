import { Table, Tag, Space } from 'antd';
import '../styles/invoice-table.css';

const columns = [
    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNumber',
      key: 'invoiceNumber',
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
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  
  const data = [
    {
      key: '1',
      invoiceNumber: '1234/2016-17',
      date: '26-02-2016',
      amount: '40,000 INR',
      action: 'Download',
    },
    {
      key: '2',
      invoiceNumber: '1234/2016-17',
      date: '26-02-2016',
      amount: '40,000 INR',
      action: 'Download',
    },
    {
      key: '3',
      invoiceNumber: '1234/2016-17',
      date: '26-02-2016',
      amount: '40,000 INR',
      action: 'Download',
    },
    {
      key: '3',
      invoiceNumber: '1234/2016-17',
      date: '26-02-2016',
      amount: '40,000 INR',
      action: 'Download',
    },
    {
      key: '3',
      invoiceNumber: '1234/2016-17',
      date: '26-02-2016',
      amount: '40,000 INR',
      action: 'Download',
    },
    {
      key: '3',
      invoiceNumber: '1234/2016-17',
      date: '26-02-2016',
      amount: '40,000 INR',
      action: 'Download',
    }
  ];

function InvoiceTable() {
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default InvoiceTable;