import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb, List, Modal, Button } from 'antd';

import Header from '../components/header';
import Footer from '../components/footer';
import TicketForm from '../components/customerSupport/ticketForm';

const { Content } = Layout;

const AdminPage = () => {
  const [tickets, setTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyModalVisible, setReplyModalVisible] = useState(false);

  useEffect(() => {
    // Fetch ticket data from the backend when the component mounts
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:5555/ticket'); // Use fetch to fetch data
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
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleTicketSelect = ticket => {
    setSelectedTicket(ticket);
    setReplyModalVisible(true);
  };

  const handleReply = (ticketKey, reply) => {
    // Logic to update ticket status or reply to the ticket
    // Example: setTicketStatus(ticketKey, 'Resolved');
    setReplyModalVisible(false);
  };

  const handlePrint = (ticketType) => {
    const ticketsToPrint = ticketType === 'resolved' ? resolvedTickets : tickets;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Customer Support Tickets</title></head><body>');
    printWindow.document.write('<h1>Customer Support Tickets</h1>');
    ticketsToPrint.forEach(ticket => {
      printWindow.document.write(`<p>${ticket.issue} - Status: ${ticket.status}</p>`);
    });
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
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
          <h3>Pending Issues</h3>
          <List
            itemLayout="horizontal"
            dataSource={tickets.filter(ticket => ticket.status === 'Pending')}
            renderItem={ticket => (
              <List.Item
                onClick={() => handleTicketSelect(ticket)} // Make each item clickable
                style={{ cursor: 'pointer' }} // Change cursor to pointer when hovering
              >
                <List.Item.Meta
                  title={ticket.issue}
                  description={`Status: ${ticket.status}`}
                />
              </List.Item>
            )}
          />
          <h3>Resolved Issues</h3>
          <List
            itemLayout="horizontal"
            dataSource={tickets.filter(ticket => ticket.status === 'Resolved')}
            renderItem={ticket => (
              <List.Item>
                <List.Item.Meta
                  title={ticket.issue}
                  description={`Status: ${ticket.status}`}
                />
              </List.Item>
            )}
          />
          <Modal
            title="Reply to Ticket"
            visible={replyModalVisible}
            onCancel={() => setReplyModalVisible(false)}
            footer={[
              <Button key="resolvedPrint" onClick={() => handlePrint('resolved')}>Print Resolved</Button>,
              <Button key="pendingPrint" onClick={() => handlePrint('pending')}>Print Pending</Button>,
              <Button key="submit" type="primary" onClick={() => handleReply(selectedTicket.key, "Your reply here")}>
                Submit
              </Button>,
            ]}
          >
            <TicketForm onFinish={values => console.log("Form submitted with values:", values)} />
          </Modal>
        </div>
      </Content>
      <Footer />
    </div>
  );
};

export default AdminPage;
