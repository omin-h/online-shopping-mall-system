import React from "react";
import { Row, Col } from "antd";

const SupportDetails = () => {
  return (
    <div
    style={{
        backgroundColor: "rgba(206, 219, 242, 0.9)", // Adjust the opacity
        backdropFilter: "blur(10px)", // Add a blur effect to the background
        padding: "20px",
        borderRadius: "8px",
        margin: "40px 0",
        width: "170%", // Adjust the width
        marginLeft: "-38%",
        marginRight: "-38%",
      }}
    >
      <Row justify="center" id="user-login">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>User Login</h2>
          <p style={{ textAlign: "left" }}>
            Detailed information about User Login goes here.
          </p>
        </Col>
      </Row>
      <Row justify="center" id="my-account">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>My Account</h2>
          <p style={{ textAlign: "left" }}>
            Detailed information about My Account goes here.
          </p>
        </Col>
      </Row>
      <Row justify="center" id="security">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>Security</h2>
          <p style={{ textAlign: "left" }}>
            Detailed information about My Account goes here.
          </p>
        </Col>
      </Row>
      <Row justify="center" id="e-commerce">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>E-commerce</h2>
          <p style={{ textAlign: "left" }}>
            Detailed information about My Account goes here.
          </p>
        </Col>
      </Row>
      <Row justify="center" id="customization">
        <Col span={20}>
          <h2 style={{ textAlign: "left" }}>Customization</h2>
          <p style={{ textAlign: "left" }}>
            Detailed information about My Account goes here.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default SupportDetails;
