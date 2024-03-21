import React, { useState } from 'react';
import { Layout, Breadcrumb } from 'antd';

import Header from '../components/header';
import Footer from '../components/footer';
import TicketList from '../components/customerSupport/ticketList';

const { Content } = Layout;

const AdminPage = () => {
  const [tickets, setTickets] = useState([]);

  // Here, you might fetch tickets data from an API or other data source

  return (
    <div>
        <Header />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Admin</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <TicketList tickets={tickets} />
      </div>
    </Content>

        <Footer />
    </div>
  );
};

export default AdminPage;
