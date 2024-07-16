import React, { useState } from "react";
import {
  Layout,
  Breadcrumb,
  Input,
  Row,
  Col,
  Card,
  Space,
  Button,
  AutoComplete,
  Popover,
  Modal,
} from "antd";

import Header from "../components/header";
import Footer from "../components/footer";
import TicketForm from "../components/customerSupport/ticketForm";
import SupportDetails from "../components/customerSupport/SupportDetails";
import TicketListPopup from "../components/customerSupport/TicketListPopup";

import { SearchOutlined } from "@ant-design/icons";

const { Content } = Layout;

const CustomerPage = () => {
  const [tickets, setTickets] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showTicketList, setShowTicketList] = useState(false);

  const onFinish = (values) => {
    const newTicket = {
      key: tickets.length + 1,
      issue: values.issue,
      status: "Open",
    };
    setTickets([...tickets, newTicket]);
    setShowTicketForm(false); // Close the ticket form popup after submission
  };

  const frequentlyAskedQuestions = [
    "How do I reset my password?",
    "How can I update my account information?",
    "What should I do if I encounter a security issue?",
    "How can I place an order?",
    "How do I contact customer support?",
    "Can I customize my account settings?",
  ];

  const handleSearch = (value) => {
    console.log("Searching for:", value);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleReportIssue = () => {
    setShowTicketForm(true); // Show the ticket form popup
  };

  const handleViewIssues = () => {
    setShowTicketList(true); // Navigate to ViewIssuesPage
  };

  const options = frequentlyAskedQuestions.map((faq) => ({
    value: faq,
  }));

  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage:
          'url("https://c4.wallpaperflare.com/wallpaper/870/756/865/4k-dark-blue-lines-grid-lines-wallpaper-preview.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Content
        style={{ padding: "0 50px", maxWidth: "800px", margin: "0 auto" }}
      >
        <Breadcrumb style={{ margin: "16px 0", color: "white" }}>
          <Breadcrumb.Item>
            <strong style={{ color: "white" }}>Customer Support</strong>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="site-layout-content">
          <Row gutter={[16, 16]} justify="center">
            <Col span={24}>
              <div className="search-bar">
                <AutoComplete
                  style={{ width: "100%" }}
                  dropdownClassName="faq-dropdown"
                  options={options}
                  onSelect={handleSearch}
                >
                  <Input.Search
                    placeholder="Search frequently asked questions"
                    onSearch={handleSearch}
                    enterButton={<Button type="primary">Search</Button>}
                  />
                </AutoComplete>
                <Button
                  type="primary"
                  onClick={handleReportIssue}
                  style={{ marginTop: "20px" }}
                >
                  Report an Issue
                </Button>
                <Button
                  type="primary"
                  onClick={handleViewIssues}
                  style={{ marginTop: "20px", marginLeft: "20px" }}
                >
                  View Issues
                </Button>
              </div>
            </Col>
            <Col span={24} style={{ marginTop: "40px" }}>
              <div className="icon-array">
                <Space size={24}>
                  {[
                    {
                      title: "FAQ",
                      icon: "https://cdn-icons-png.flaticon.com/128/1028/1028914.png",
                    },
                    {
                      title: "User Login",
                      icon: "https://cdn.iconscout.com/icon/free/png-256/free-gear-289-667857.png?f=webp",
                      sectionId: "user-login",
                    },
                    {
                      title: "My Account",
                      icon: "https://cdn-icons-png.flaticon.com/128/1028/1028919.png",
                      sectionId: "my-account",
                    },
                    {
                      title: "Security",
                      icon: "https://cdn-icons-png.flaticon.com/128/1028/1028910.png",
                      sectionId: "security",
                    },
                    {
                      title: "E-commerce",
                      icon: "https://cdn-icons-png.flaticon.com/128/1028/1028923.png",
                      sectionId: "e-commerce",
                    },
                    {
                      title: "Customization",
                      icon: "https://cdn-icons-png.flaticon.com/128/1028/1028932.png",
                      sectionId: "customization",
                    },
                  ].map((item, index) => (
                    <Popover
                      key={index}
                      content={item.title}
                      title={null}
                      trigger="hover"
                    >
                      <Card
                        hoverable
                        style={{
                          width: 120,
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          transition: "background-color 0.3s, box-shadow 0.3s",
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        }}
                        cover={<img alt={item.title} src={item.icon} />}
                        onClick={() => scrollToSection(item.sectionId)}
                      />
                    </Popover>
                  ))}
                </Space>
              </div>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: "40px" }}>
            <Col span={20} id="user-login">
              <SupportDetails scrollToSection={scrollToSection} />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />

      {/* Ticket Form Popup */}
      <Modal
        title="Report an Issue"
        visible={showTicketForm}
        onCancel={() => setShowTicketForm(false)} // Close the ticket form popup when canceled
        footer={null}
      >
        <div
          className="ticket-form"
          style={{ padding: "20px", borderRadius: "8px" }}
        >
          <TicketForm onFinish={onFinish} />
        </div>
      </Modal>
      <TicketListPopup
        visible={showTicketList}
        onClose={() => setShowTicketList(false)}
      />
    </div>
  );
};

export default CustomerPage;
