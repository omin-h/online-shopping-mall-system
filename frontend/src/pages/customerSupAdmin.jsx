// AdminPage.jsx

import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb, Modal, Button } from 'antd';

import Header from '../components/header';
import Footer from '../components/footer';
import TicketFormWithReply from '../components/customerSupport/TicketFormWithReply';
import TicketList from '../components/customerSupport/ticketList';

const { Content } = Layout;

const AdminPage = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [replyModalVisible, setReplyModalVisible] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:5555/ticket');
        if (response.ok) {
          const data = await response.json();
          setTickets(data);
        } else {
          console.error('Failed to fetch tickets');
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleTicketSelect = ticketId => {
    setSelectedTicketId(ticketId);
    setReplyModalVisible(true);
  };

  const handleReply = (ticketId, reply) => {
    // You can add logic here to update the ticket status if needed
    setReplyModalVisible(false);
  };

  const handlePrint = ticketType => {
    // Your printing logic here
  };

  return (
    <div>
      <Header />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <h2>Customer Support - Issues</h2>
          <h3>All Issues</h3>
          <TicketList tickets={tickets} onTicketSelect={handleTicketSelect} />
          <Modal
            title="Reply to Ticket"
            visible={replyModalVisible}
            onCancel={() => setReplyModalVisible(false)}
            footer={[
              <Button key="resolvedPrint" onClick={() => handlePrint('resolved')}>Print Resolved</Button>,
              <Button key="delete" type="primary" onClick={() => handleReply(selectedTicketId, "Your reply here")}>
                Delete
              </Button>,
            ]}
          >
            <TicketFormWithReply ticketId={selectedTicketId} onFinish={handleReply} />
          </Modal>
        </div>
      </Content>
      <Footer />
    </div>
  );
};

export default AdminPage;
