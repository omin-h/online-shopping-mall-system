import React, { useState } from 'react';
import { Layout, Breadcrumb, Input, Row, Col, Card, Space, Button, AutoComplete, Popover } from 'antd';

import Header from '../components/header';
import Footer from '../components/footer';
import TicketForm from '../components/customerSupport/ticketForm';

import { SearchOutlined } from '@ant-design/icons';


const { Content } = Layout;

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
    console.log('Searching for:', value);
  };

  const handleIconClick = topic => {
    console.log('Clicked on:', topic);
  };

  const handleReportIssue = () => {
    const ticketFormElement = document.getElementById('ticket-form');
    ticketFormElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const options = frequentlyAskedQuestions.map((faq, index) => ({
    value: faq,
  }));

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/870/756/865/4k-dark-blue-lines-grid-lines-wallpaper-preview.jpg")', // Replace the URL with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <Content style={{ padding: '0 50px', maxWidth: '800px', margin: '0 auto' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Support</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Row gutter={[16, 16]} justify="center">
            <Col span={24}>
              <div className="search-bar">
                <AutoComplete
                  style={{ width: '100%' }} // Make the search bar longer
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
                <Button type="primary" onClick={handleReportIssue} style={{ marginTop: '20px' }}>Report an Issue</Button>
              </div>
            </Col>
            <Col span={24} style={{ marginTop: '40px' }}>
              <div className="icon-array">
                <Space size={24}>
                  {[
                    { title: 'User Login', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-gear-289-667857.png?f=webp' },
                    { title: 'My Account', icon: 'https://cdn-icons-png.flaticon.com/128/1028/1028919.png' },
                    { title: 'Security', icon: 'https://cdn-icons-png.flaticon.com/128/1028/1028910.png' },
                    { title: 'E-commerce', icon: 'https://cdn-icons-png.flaticon.com/128/1028/1028923.png' },
                    { title: 'Communication', icon: 'https://cdn-icons-png.flaticon.com/128/1028/1028914.png' },
                    { title: 'Customization', icon: 'https://cdn-icons-png.flaticon.com/128/1028/1028932.png' }
                  ].map((item, index) => (
                    <Popover key={index} content={item.title} title={null} trigger="hover">
                      <Card
                        hoverable
                        style={{ width: 120 }}
                        cover={<img alt={item.title} src={item.icon} />}
                        onClick={() => handleIconClick(item.title)}
                      />
                    </Popover>
                  ))}
                </Space>
              </div>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: '40px' }}>
            <Col span={16}>
              <div className="ticket-form" style={{ padding: '20px', borderRadius: '8px' }}>
                <TicketForm onFinish={onFinish} />

              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </div>
  );
};

export default CustomerPage;
