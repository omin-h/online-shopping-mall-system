// TicketList.jsx

import React from 'react';
import { Table } from 'antd';

const TicketList = ({ tickets, onTicketSelect }) => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Issue',
      dataIndex: 'issue',
      key: 'issue',
      width: '50%',
      render: (text, record) => <a onClick={() => onTicketSelect(record._id)}>{text}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <span style={{ color: status === 'Pending' ? 'red' : 'green' }}>{status}</span>
      ),
    },
  ];

  return (
    <div className="ticket-list">
      <Table dataSource={tickets} columns={columns} pagination={false} />
    </div>
  );
};

export default TicketList;
