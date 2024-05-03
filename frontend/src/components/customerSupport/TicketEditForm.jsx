import React, { useState } from 'react';
import { Modal, Form, Input, Button, notification } from 'antd';
import axios from 'axios';



const TicketEditForm = ({ visible, onClose, ticket, onUpdate }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (values) => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:5555/ticket/${ticket._id}`, values);
      onUpdate(ticket._id);
      onClose();
      notification.success({
        message: 'Success',
        description: 'Ticket updated successfully',
      });
    } catch (error) {
      console.error('Error updating ticket:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to update ticket',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Edit Ticket"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form
        form={form}
        onFinish={handleUpdate}
        initialValues={{ ...ticket }}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please enter first name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please enter last name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Issue"
          name="issue"
          rules={[{ required: true, message: 'Please enter issue' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TicketEditForm;
