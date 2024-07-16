import React from 'react';
import { Card, Form, Input, Typography, Button, notification } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const TicketForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await fetch('http://localhost:5555/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        },
        body: JSON.stringify(values), // Serialize form values to JSON
      });

      if (response.ok) {
        console.log('Issue submitted successfully');
        form.resetFields();
        notification.success({
          message: 'Success',
          description: 'Issue submitted successfully',
        });

      } else {
        console.error('Failed to submit issue');
        notification.error({
          message: 'Error',
          description: 'Failed to submit issue',
        });
      }
    } catch (error) {
      console.error('Error submitting ticket:', error);
      notification.error({
        message: 'Error',
        description: 'Error submitting ticket',
      });
    }
  };

  return (
    <div id="ticket-form" style={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.2)' }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        form={form}
        name="ticket_form"
        style={{ maxWidth: 600, margin: '0 auto' }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Card size="small" title={<Title level={4}>Tell us about your issue</Title>} style={{ borderRadius: 12 }}>
          <Form.Item
            label={<Title level={5} style={{ margin: 0 }}>First Name</Title>}
            name="firstName"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input style={{ borderRadius: 8 }} />
          </Form.Item>

          <Form.Item
            label={<Title level={5} style={{ margin: 0 }}>Last Name</Title>}
            name="lastName"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input style={{ borderRadius: 8 }} />
          </Form.Item>

          <Form.Item
            label={<Title level={5} style={{ margin: 0 }}>Email</Title>}
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input style={{ borderRadius: 8 }} />
          </Form.Item>

          <Form.Item
            label={<Title level={5} style={{ margin: 0 }}>Issue</Title>}
            name="issue"
            rules={[{ required: true, message: 'Please enter the issue' }]}
          >
            <TextArea rows={4} style={{ borderRadius: 8 }} />
          </Form.Item>
        </Card>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit" style={{ borderRadius: 8, float: 'right' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketForm;
