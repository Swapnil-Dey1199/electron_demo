import { useState } from "react";
import { Row, Col, Input, Button, Select } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import "../styles/invoice-drawer.css";

const options = [
  { label: "Walmart", value: 100 },
  { label: "Amazon", value: 200 },
  { label: "Microsoft", value: 50 },
  { label: "Goldman Sachs", value: 500 },
  { label: "RS Innovations", value: 700 },
  { label: "SpaceX", value: 600 },
  { label: "Google", value: 850 },
  { label: "Apple", value: 900 },
  { label: "Samsung", value: 350 },
  { label: "Xiaomi", value: 550 },
];

function InvoiceDrawerLineItem() {
  const [itemCount, setItemCount] = useState(2);
  const [items, setItems] = useState([{}]);
  return (
    <>
      {items.map((item) => {
        return (
          <Row style={{ marginBottom: "8px" }}>
            <Col span={12}>
              <div className="line-item-cell" style={{textAlign:'left'}}>
                <Select
                  showSearch
                  style={{ width: "100%"}}
                  options={options}
                  onSelect={(value) => {
                      const temp = [...items]
                      
                  }}
                ></Select>
              </div>
            </Col>
            <Col span={3}>
              <div className="line-item-cell">
                <Input defaultValue="1" style={{ textAlign: "center" }} />
              </div>
            </Col>
            <Col span={4} className="center-vertical">
              <div
                className="line-item-cell"
                style={{ fontSize: "14px" }}
              ></div>
            </Col>
            <Col span={4} className="center-vertical">
              <div
                className="line-item-cell"
                style={{ fontSize: "14px" }}
              ></div>
            </Col>
            <Col span={1} className="center-vertical">
              <div
                className="line-item-cell"
                style={{
                  textAlign: "center",
                  padding: "0px",
                  fontSize: "16px",
                }}
              >
                <MoreOutlined />
              </div>
            </Col>
          </Row>
        );
      })}
      <Row style={{ marginBottom: "6px" }}>
        <Col span={12}>
          <div className="line-item-cell" style={{ textAlign: "left" }}>
            <Button
              type="text"
              style={{
                fontFamily: "Aeonik-Bold",
                fontSize: "12px",
                color: "#4C5FD0",
                letterSpacing: "0.7px !important",
                padding: "0px",
              }}
              onClick={(e) => {
                let temp = [...items];
                temp.push({});
                setItems(temp);
              }}
            >
              <span style={{ fontSize: "16px", paddingRight: "6px" }}>+</span>
              ADD ITEM
            </Button>
          </div>
        </Col>
        <Col span={3}>
          <div className="line-item-cell"></div>
        </Col>
        <Col className="bottom-vertical" span={4}>
          <div className="line-item-cell line-header-cell">Total</div>
        </Col>
        <Col className="bottom-vertical" span={4}>
          <div
            className="line-item-cell"
            style={{ fontFamily: "Aeonik-Bold", fontSize: "15px" }}
          >
            $20000
          </div>
        </Col>
        <Col span={1}></Col>
      </Row>
    </>
  );
}

export default InvoiceDrawerLineItem;
