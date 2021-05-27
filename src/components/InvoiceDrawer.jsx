import "../styles/invoice-drawer.css";
import { Button, Drawer, Row, Col, Select, DatePicker } from "antd";
import { forwardRef, useState, useImperativeHandle } from "react";
import TextArea from "antd/lib/input/TextArea";
import DrawerFooter from "./DrawerFooter";

const options = [
  { label: "Walmart", value: "Walmart" },
  { label: "Amazon", value: "Amazon" },
  { label: "Microsoft", value: "Microsoft" },
  { label: "Goldman Sachs", value: "Goldman Sachs" },
  { label: "RS Innovations", value: "RS Innovations" },
  { label: "SpaceX", value: "SpaceX" },
  { label: "Google", value: "Google" },
  { label: "Apple", value: "Apple" },
  { label: "Samsung", value: "Samsung" },
  { label: "Xiaomi", value: "Xiaomi" },
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
      bodyStyle={{ paddingBottom: 80 }}
      footer={<DrawerFooter/>}
    >
      <>
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
                style={{ width: "100%", padding: '5px 0px' }}
                options={options}
                defaultValue="Choose recipient"

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
            <div style={{ fontFamily: "Aeonik-Regular", fontSize: "12px" }}>
              Issued On
            </div>
            <div style={{padding: '5px 15px 5px 0px'}}>
              <DatePicker  format='MMM DD, YYYY' style={{ width: '100%' }} />
            </div>
          </Col>
          <Col span={12}>
            <div style={{ fontFamily: "Aeonik-Regular", fontSize: "12px" }}>
              Due On
            </div>
            <div style={{padding: '5px 0px'}}>
              <DatePicker  format='MMM DD, YYYY' style={{ width: '100%' }} />
            </div>
          </Col>
        </Row>
      </>
    </Drawer>
  );
}

export default forwardRef(InvoiceDrawer);
