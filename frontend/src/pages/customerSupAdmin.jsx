import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb, Modal, Button, message } from 'antd';
import jsPDF from 'jspdf';

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

  const handleReply = () => {
    setReplyModalVisible(false);
    // Refresh tickets after replying
    fetchTickets();
  };

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

  const handlePrint = async () => {
    try {
      const response = await fetch('http://localhost:5555/ticket');
      if (response.ok) {
        const ticketsData = await response.json();
        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
        let yPos = 10;
  
        // Header
        doc.setFontSize(14); // Set font size for header
        doc.text('Customer Issues Report', 70, yPos); // Header title
        doc.setDrawColor(0); // Set border color
        doc.setLineWidth(0.5); // Set border line width
        doc.line(10, yPos + 8, 200, yPos + 8); // Draw a line under the header
        yPos += 20; // Increase yPos after the header
  
        // Table Header
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255); // Set text color to white
        doc.setFillColor(0, 51, 102); // Set fill color to dark blue
        doc.rect(10, yPos, 190, 10, 'F'); // Draw a filled rectangle for header background
        doc.setFontSize(10); // Set font size for table header
        doc.text('First Name', 15, yPos + 8); // First Name
        doc.text('Last Name', 40, yPos + 8); // Last Name
        doc.text('Issue', 70, yPos + 8); // Issue
        doc.text('Email', 110, yPos + 8); // Email
        doc.text('Reply', 150, yPos + 8); // Reply
        doc.text('Status', 180, yPos + 8); // Status
        yPos += 1; // Reduce the space between table header and data
  
        // Data rows
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0); // Set text color to black
        doc.setFillColor(255); // Set fill color to white for alternating rows
        ticketsData.forEach((ticket, index) => {
          let longestTextLength = Math.max(ticket.email.length, ticket.issue.length, ticket.reply.length);
          let rowHeight = 10;
          if (longestTextLength > 30) {
            rowHeight = 10; // Increase row height for long text
          }
          yPos += rowHeight; // Increment yPos by rowHeight
          doc.setFillColor(index % 2 === 0 ? 240 : 255, 255, 255); // Set fill color for alternating rows
          doc.rect(10, yPos, 190, rowHeight, 'F'); // Draw a filled rectangle for row background
          doc.text(ticket.firstName, 15, yPos + 8); // First Name
          doc.text(ticket.lastName, 40, yPos + 8); // Last Name
          doc.text(ticket.issue, 70, yPos + 8, { maxWidth: 40 }); // Issue, limit width to 40mm
          doc.text(ticket.email, 110, yPos + 8, { maxWidth: longestTextLength * 2 }); // Email, limit width based on text length
          doc.text(ticket.reply, 150, yPos + 8, { maxWidth: 40 }); // Reply, limit width to 40mm
          doc.text(ticket.status, 180, yPos + 8); // Status
        });
  
        // Footer
        doc.setLineWidth(0.5); // Set border line width for footer
        doc.line(10, 287, 200, 287); // Draw a line above the footer bar
        doc.setFontSize(8); // Set font size for footer
        doc.setTextColor(100); // Set text color to dark gray
        doc.text('© 2024 Galaxy City Online Shopping Mall', 100, 293, { align: 'center' }); // Footer text line 1
        doc.text('All rights reserved', 100, 297, { align: 'center' }); // Footer text line 2
        doc.text('Developed with ♥', 100, 301, { align: 'center' }); // Footer text line 3
  
        // Open PDF in new tab instead of auto downloading
        const pdfDataUri = doc.output('datauristring');
        const newWindow = window.open();
        newWindow.document.write('<iframe src="' + pdfDataUri + '" frameborder="0" style="border: none; width: 100%; height: 100%;"></iframe>');
      } else {
        console.error('Failed to fetch tickets');
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
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
          <h2 style={{ display: 'inline-block' }}>Customer Support - Issues</h2>
          <Button style={{ float: 'right', marginBottom: '10px', marginLeft: '10px' }} onClick={handlePrint}>Print Report</Button>
          <h3>All Issues</h3>
          <TicketList tickets={tickets} onTicketSelect={handleTicketSelect} />
          <Modal
            title="Reply to Ticket"
            visible={replyModalVisible}
            onCancel={() => setReplyModalVisible(false)}
            footer={[
              <Button key="resolvedPrint" onClick={handlePrint}>Print Resolved</Button>,
              <Button key="delete" type="primary" onClick={() => handleReply()}>
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
