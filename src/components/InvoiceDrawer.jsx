import "../styles/invoice-drawer.css";
import { Drawer, Row, Col, Select, DatePicker } from "antd";
import { forwardRef, useState, useImperativeHandle } from "react";
import TextArea from "antd/lib/input/TextArea";
import DrawerFooter from "./DrawerFooter";
import InvoiceDrawerLineItem from "./InvoiceDrawerLineItem";

const options = [
  { label: "Walmart", value: "WLMRT" },
  { label: "Amazon", value: "AMZN" },
  { label: "Microsoft", value: "MCRSFT" },
  { label: "Goldman Sachs", value: "GS" },
  { label: "RS Innovations", value: "RS" },
  { label: "SpaceX", value: "SPCX" },
  { label: "Google", value: "GGL" },
  { label: "Apple", value: "APL" },
  { label: "Samsung", value: "SMSNG" },
  { label: "Xiaomi", value: "XMI" },
];

function InvoiceDrawer(props, ref) {
  const [isOpen, setIsOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    openDrawer() {
      setIsOpen(true);
    },
  }));
  return (
    <Drawer
      title="Create new invoice"
      width="34%"
      onClose={() => setIsOpen(false)}
      visible={isOpen}
      footer={<DrawerFooter/>}
    >
      <div>
        <Row>
          <Col span={24}>
            <span style={{ fontFamily: "Aeonik-Medium", fontSize: "22px" }}>
              #AS8954
            </span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="recipient-wrapper">
              <div style={{ fontFamily: "Aeonik-Regular", fontSize: "12px" }}>
                Recipient Name
              </div>
              <Select
              showSearch
                style={{ width: "100%", padding: '5px 0px' }}
                options={options}
                defaultValue="Choose recipient"
                onSelect={value=>console.log(value)}
              ></Select>
              <div style={{ fontFamily: "Aeonik-Regular", fontSize: "12px", paddingTop: "4px"}}>
                Recipient Address
              </div>
              <TextArea rows={3}/>
            </div>
          </Col>
        </Row>
        <Row style={{margin:'6px 0px'}}>
          <Col span={12}>
            <div style={{ fontFamily: "Aeonik-Regular", fontSize: "12px", color: '#606074' }}>
              Issued On
            </div>
            <div style={{padding: '5px 15px 5px 0px'}}>
              <DatePicker  format='MMM DD, YYYY' style={{ width: '100%' }} />
            </div>
          </Col>
          <Col span={12}>
            <div style={{ fontFamily: "Aeonik-Regular", fontSize: "12px", color: '#606074' }}>
              Due On
            </div>
            <div style={{padding: '5px 0px'}}>
              <DatePicker  format='MMM DD, YYYY' style={{ width: '100%' }} />
            </div>
          </Col>
        </Row>
        <Row style={{marginBottom:'6px'}}>
          <Col span={12}>
            <div className="line-item-cell line-header-cell" style={{ textAlign:'left'}}>
              Description
            </div>
          </Col>
          <Col span={3}>
            <div className="line-item-cell line-header-cell">
              Qty
            </div>
          </Col>
          <Col span={4}>
            <div className="line-item-cell line-header-cell">
              Price
            </div>
          </Col>
          <Col span={4}>
            <div className="line-item-cell line-header-cell">
              Total
            </div>
          </Col>
          <Col span={1}></Col>
        </Row>
        <InvoiceDrawerLineItem/>
      </div>
    </Drawer>
  );
}

export default forwardRef(InvoiceDrawer);
