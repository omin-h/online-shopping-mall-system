import React, { useState } from 'react';
import { Layout, Breadcrumb, Input, Row, Col, Card, Space, Anchor } from 'antd';

import Header from '../components/header';
import Footer from '../components/footer';
import TicketForm from '../components/customerSupport/ticketForm';


const { Content } = Layout;
const { Search } = Input;
const { Link } = Anchor;

const CustomerPage = () => {
  const [tickets, setTickets] = useState([]);

  const onFinish = values => {
    const newTicket = {
      key: tickets.length + 1,
      issue: values.issue,
      status: 'Open',
    };
    setTickets([...tickets, newTicket]);
  };

  const frequentlyAskedQuestions = [
    'How do I reset my password?',
    'How can I update my account information?',
    'What should I do if I encounter a security issue?',
    'How can I place an order?',
    'How do I contact customer support?',
    'Can I customize my account settings?',
  ];

  const handleSearch = value => {
    // Handle search functionality here
    console.log('Searching for:', value);
  };

  const handleIconClick = topic => {
    // Handle icon click here
    console.log('Clicked on:', topic);
  };

  return (
    <div>
      <Header />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Support</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="search-bar">
              <Search
                placeholder="Search frequently asked questions"
                onSearch={handleSearch}
                enterButton
              />
              <div className="faq-list">
                {frequentlyAskedQuestions.map((faq, index) => (
                  <p key={index}>{faq}</p>
                ))}
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="icon-array">
              <Space size={24}>
                <Card
                  hoverable
                  style={{ width: 120 }}
                  cover={<img alt="User Login" src="/path/to/user-login-icon.png" />}
                  onClick={() => handleIconClick('User Login')}
                >
                  User Login
                </Card>
                <Card
                  hoverable
                  style={{ width: 120 }}
                  cover={<img alt="My Account" src="/path/to/my-account-icon.png" />}
                  onClick={() => handleIconClick('My Account')}
                >
                  My Account
                </Card>
                <Card
                  hoverable
                  style={{ width: 120 }}
                  cover={<img alt="Security" src="/path/to/security-icon.png" />}
                  onClick={() => handleIconClick('Security')}
                >
                  Security
                </Card>
                <Card
                  hoverable
                  style={{ width: 120 }}
                  cover={<img alt="E-commerce" src="/path/to/e-commerce-icon.png" />}
                  onClick={() => handleIconClick('E-commerce')}
                >
                  E-commerce
                </Card>
                <Card
                  hoverable
                  style={{ width: 120 }}
                  cover={<img alt="Communication" src="/path/to/communication-icon.png" />}
                  onClick={() => handleIconClick('Communication')}
                >
                  Communication
                </Card>
                <Card
                  hoverable
                  style={{ width: 120 }}
                  cover={<img alt="Customization" src="/path/to/customization-icon.png" />}
                  onClick={() => handleIconClick('Customization')}
                >
                  Customization
                </Card>
              </Space>
            </div>
          </Col>
        </Row>
        <div className="ticket-form">
          <TicketForm onFinish={onFinish} />
        </div>
       
      </div>
    </Content>
        <Footer />
    </div>
  );
};

export default CustomerPage;
