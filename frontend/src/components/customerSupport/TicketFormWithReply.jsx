// TicketFormWithReply.jsx

import React from 'react';
import { Form, Input, Button } from 'antd';

const TicketFormWithReply = ({ onFinish }) => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    onFinish(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true, message: 'Please input your first name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[{ required: true, message: 'Please input your last name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your email' }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        name="issue"
        label="Issue"
        rules={[{ required: true, message: 'Please describe the issue' }]}
      >
        <Input.TextArea />
      </Form.Item>
      {/* Additional field for reply */}
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
