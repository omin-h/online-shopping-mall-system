// TicketFormWithReply.jsx

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';

const TicketFormWithReply = ({ ticketId, onFinish }) => {
  const [form] = Form.useForm();
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch(`http://localhost:5555/ticket/${ticketId}`);
        if (response.ok) {
          const data = await response.json();
          setTicketData(data);
        } else {
          console.error('Failed to fetch ticket data');
        }
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    fetchTicketData();
  }, [ticketId]);

  const handleSubmit = async values => {
    try {
      const response = await fetch(`http://localhost:5555/ticket/${ticketId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reply: values.reply, status: 'Resolved' }),
      });
      if (response.ok) {
        message.success('Ticket updated successfully');
        onFinish();
      } else {
        console.error('Failed to update ticket');
        message.error('Failed to update ticket');
      }
    } catch (error) {
      console.error('Error updating ticket:', error);
      message.error('Error updating ticket');
    }
  };

  if (!ticketData) {
    return <div>Loading...</div>;
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="firstName"
        label="First Name"
        initialValue={ticketData.firstName}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last Name"
        initialValue={ticketData.lastName}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        initialValue={ticketData.email}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="issue"
        label="Issue"
        initialValue={ticketData.issue}
      >
        <Input.TextArea disabled />
      </Form.Item>
      <Form.Item
        name="reply"
        label="Reply"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TicketFormWithReply;
