import "../styles/invoice-drawer.css";
import { Button, Drawer, Row, Col, Select } from "antd";
import { forwardRef, useState, useImperativeHandle } from "react";

const options = [
  { label: "asd", value: "adf" },
  { label: "asd", value: "adf" },
  { label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },{ label: "asd", value: "adf" },
  { label: "asd", value: "adf" },
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
      width="35%"
      onClose={() => setIsOpen(false)}
      visible={isOpen}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button style={{ marginRight: 8 }}>Cancel</Button>
          <Button type="primary">Submit</Button>
        </div>
      }
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
                Recipient Email
              </div>
              <Select
                style={{ width: "100%", padding: '5px 0px' }}
                options={options}
                defaultValue="Choose recipient"

              ></Select>
            </div>
          </Col>
        </Row>
      </>
    </Drawer>
  );
}

export default forwardRef(InvoiceDrawer);
