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
        doc.setFontSize(14); 
        doc.text('Customer Issues Report', 70, yPos); 
        doc.setDrawColor(0); 
        doc.setLineWidth(0.5);
        doc.line(10, yPos + 8, 200, yPos + 8); 
        yPos += 20; 
  
        // Table Header
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255); 
        doc.setFillColor(0, 51, 102); 
        doc.rect(10, yPos, 190, 10, 'F'); 
        doc.setFontSize(10); 
        doc.text('First Name', 15, yPos + 8); 
        doc.text('Last Name', 40, yPos + 8); 
        doc.text('Issue', 70, yPos + 8); 
        doc.text('Email', 110, yPos + 8); 
        doc.text('Reply', 150, yPos + 8); 
        doc.text('Status', 180, yPos + 8); 
        yPos += 1; 
  
        // Data rows
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0); 
        doc.setFillColor(255); 
        ticketsData.forEach((ticket, index) => {
          let longestTextLength = Math.max(ticket.email.length, ticket.issue.length, ticket.reply.length);
          let rowHeight = 10;
          if (longestTextLength > 30) {
            rowHeight = 10; 
          }
          yPos += rowHeight; 
          doc.setFillColor(index % 2 === 0 ? 240 : 255, 255, 255);
          doc.rect(10, yPos, 190, rowHeight, 'F'); 
          doc.text(ticket.firstName, 15, yPos + 8); 
          doc.text(ticket.lastName, 40, yPos + 8); 
          doc.text(ticket.issue, 70, yPos + 8, { maxWidth: 40 });
          doc.text(ticket.email, 110, yPos + 8, { maxWidth: longestTextLength * 2 }); 
          doc.text(ticket.reply, 150, yPos + 8, { maxWidth: 40 });
          doc.text(ticket.status, 180, yPos + 8); 
        });
  
        // Footer
        doc.setLineWidth(0.5); 
        doc.line(10, 287, 200, 287);
        doc.setFontSize(8); 
        doc.setTextColor(100); 
        doc.text('© 2024 Galaxy City Online Shopping Mall', 100, 293, { align: 'center' });
        doc.text('All rights reserved', 100, 297, { align: 'center' }); 
        doc.text('Developed with ♥', 100, 301, { align: 'center' }); 
  
        
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
