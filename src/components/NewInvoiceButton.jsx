import { useRef } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import InvoiceDrawer from "./InvoiceDrawer";

function NewInvoiceButton() {
  const myRef = useRef();
  return (
    <>
      <div style={{ order: 1 }}>
        <Button
          style={{
            backgroundColor: "#4C5FD0",
            color: "white",
            borderRadius: "4px",
          }}
          icon={<PlusOutlined />}
          onClick={() => myRef.current.openDrawer()}
        >
          <span style={{ fontFamily: "Aeonik-Regular", marginLeft: "4px" }}>
            New Invoice
          </span>
        </Button>
      </div>
      <InvoiceDrawer ref={myRef} />
    </>
  );
}

export default NewInvoiceButton;
