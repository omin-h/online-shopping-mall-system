import React from "react";
import { Row, Col } from "antd";

const SupportDetails = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "8px",
        margin: "40px 0",
      }}
    >
      <Row justify="center">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>User Login</h2>
          <p style={{ textAlign: "left" }}>
            Detailed information about User Login goes here.
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>My Account</h2>
          <p style={{ textAlign: "left" }}>
            Detailed information about My Account goes here.
          </p>
        </Col>
      </Row>
      {/* Add more sections for other topics */}
    </div>
  );
};

export default SupportDetails;
