import React, { useState, useEffect } from 'react';
import { Modal, Table, Button, Space, Popconfirm, notification } from 'antd';
import axios from 'axios';
import TicketEditForm from './TicketEditForm'; // Import the TicketEditForm component


const TicketListPopup = ({ visible, onClose }) => {
  const [tickets, setTickets] = useState([]);
  const [editTicket, setEditTicket] = useState(null);

  useEffect(() => {
    if (visible) {
      fetchTickets();
    }
  }, [visible]);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/ticket`);
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to fetch tickets',
      });
    }
  };

  const handleDelete = async (ticketId) => {
    try {
      await axios.delete(`http://localhost:5555/ticket/${ticketId}`);
      fetchTickets();
      notification.success({
        message: 'Success',
        description: 'Ticket deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting ticket:', error);
      notification.error({
        message: 'Error',
        description: 'Failed to delete ticket',
      });
    }
  };

  const handleEdit = (ticket) => {
    setEditTicket(ticket);
  };

  const handleUpdate = async (ticketId) => {
    fetchTickets();
    setEditTicket(null);
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Issue',
      dataIndex: 'issue',
      key: 'issue',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this ticket?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Modal
        title="View My Issues"
        visible={visible}
        onCancel={onClose}
        footer={null}
        width={900}
      >
        <Table columns={columns} dataSource={tickets} rowKey="_id" />
      </Modal>
      {editTicket && (
        <TicketEditForm
          visible={!!editTicket}
          onClose={() => setEditTicket(null)}
          ticket={editTicket}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default TicketListPopup;
