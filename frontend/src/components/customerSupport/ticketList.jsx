// TicketList.jsx

import React from 'react';
import { Table } from 'antd';

const TicketList = ({ tickets, onTicketSelect }) => {
  const columns = [
    {
      title: 'Issue',
      dataIndex: 'issue',
      key: 'issue',
      width: '70%',
      render: (text, record) => <a onClick={() => onTicketSelect(record)}>{text}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <span style={{ color: status === 'Open' ? 'red' : 'green' }}>{status}</span>
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
