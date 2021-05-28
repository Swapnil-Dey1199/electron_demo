import { useState } from "react";
import { Row, Col, Input, Button, Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "../styles/line-item-wrapper.css";

const options = [
  { id: 1, label: "Walmart", value: 100 },
  { id: 2, label: "Amazon", value: 200 },
  { id: 3, label: "Microsoft", value: 50 },
  { id: 4, label: "Goldman Sachs", value: 500 },
  { id: 5, label: "RS Innovations", value: 700 },
  { id: 6, label: "SpaceX", value: 600 },
  { id: 7, label: "Google", value: 850 },
  { id: 8, label: "Apple", value: 900 },
  { id: 9, label: "Samsung", value: 350 },
  { id: 10, label: "Xiaomi", value: 550 },
];

function InvoiceDrawerLineItem() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([{}]);

  const updateTotal = () => {
    let totalSum = 0;
    items.forEach((item) => {
      totalSum += item.total ? item.total : 0;
    })
    setTotal(totalSum);
  }

  return (
    <>
      <div className="line-item-wrapper">
        {items.map((item, index) => {
          return (
            <Row style={{ marginBottom: "8px" }}>
              <Col span={12}>
                <div className="line-item-cell" style={{ textAlign: 'left' }}>
                  <Select
                    showSearch
                    value={item.description ? item.description : ""}
                    style={{ width: "100%" }}
                    options={options}
                    onSelect={(value, option) => {
                      const temp = [...items]
                      temp[index].description = option.label
                      temp[index].price = option.value
                      if (!temp[index].qty) temp[index].qty = 1
                      temp[index].total = parseInt(temp[index].qty) * parseInt(temp[index].price)
                      setItems(temp)
                      updateTotal()
                    }}
                    filterOption={(input, option) =>
                      option.label.toLowerCase().startsWith(input.toLowerCase())
                    }
                  ></Select>
                </div>
              </Col>
              <Col span={3}>
                <div className="line-item-cell">
                  <Input style={{ textAlign: "center" }}
                    onChange={e => {
                      const temp = [...items]
                      temp[index].qty = parseInt(e.target.value)
                      temp[index].total = parseInt(temp[index].price) * parseInt(temp[index].qty)
                      setItems(temp)
                      updateTotal()
                    }}
                    value={item.qty ? item.qty : 1}
                  />
                </div>
              </Col>
              <Col span={4} className="center-vertical">
                <div
                  className="line-item-cell"
                  style={{ fontSize: "14px" }}
                >
                  {item.price ? item.price : ""}
                </div>
              </Col>
              <Col span={4} className="center-vertical">
                <div
                  className="line-item-cell"
                  style={{ fontSize: "14px" }}
                >
                  {item.total ? item.total : ""}
                </div>
              </Col>
              <Col span={1} className="center-vertical">
                <div
                  className="line-item-cell"
                  style={{
                    textAlign: "center",
                    padding: "0px",
                    fontSize: "16px",
                  }}
                > <Button size="small" icon={<CloseOutlined />} disabled={items.length === 1}
                  onClick={e => {
                    const temp = [...items]
                    temp.splice(index, 1)
                    console.log(temp)
                    setItems(temp)
                    console.log(items)
                    updateTotal()
                  }}
                  />
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
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
                console.log(items);
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
            ${total}
          </div>
        </Col>
        <Col span={1}></Col>
      </Row>
    </>
  );
}

export default InvoiceDrawerLineItem;
