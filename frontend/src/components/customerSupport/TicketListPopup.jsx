import React, { useState, useEffect } from "react";
import {
  Modal,
  Table,
  Button,
  Space,
  Popconfirm,
  notification,
  Input,
} from "antd";
import axios from "axios";
import TicketEditForm from "./TicketEditForm"; // Import the TicketEditForm component
import TicketDetailsPopup from "./TicketDetailsPopup";

const TicketListPopup = ({ visible, onClose }) => {
  const [tickets, setTickets] = useState([]);
  const [editTicket, setEditTicket] = useState(null);
  const [detailsPopupVisible, setDetailsPopupVisible] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchText, setSearchText] = useState("");

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
      console.error("Error fetching tickets:", error);
      notification.error({
        message: "Error",
        description: "Failed to fetch tickets",
      });
    }
  };

  const handleDelete = async (ticketId) => {
    try {
      await axios.delete(`http://localhost:5555/ticket/${ticketId}`);
      fetchTickets();
      notification.success({
        message: "Success",
        description: "Ticket deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting ticket:", error);
      notification.error({
        message: "Error",
        description: "Failed to delete ticket",
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

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleViewDetails = (ticket) => {
    setSelectedTicket(ticket); // Set the selected ticket
    setDetailsPopupVisible(true); // Set detailsPopupVisible to true to show the modal
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Issue",
      dataIndex: "issue",
      key: "issue",
      render: (text, record) => (
        <a onClick={() => handleViewDetails(record)}>{text}</a>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this issue?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger"className="custom-delete-butt5541n" style={{ backgroundColor: 'rgb(139, 0, 0)', color: 'white' }} >Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const filteredTickets = searchText
    ? tickets.filter((ticket) =>
        ticket.firstName.toLowerCase().includes(searchText.toLowerCase())
      )
    : tickets;

  return (
    <div>
      <Modal
        title="View My Issues"
        visible={visible}
        onCancel={onClose}
        footer={null}
        width={900}
      >
 
        <Input.Search
          placeholder="Search by first name"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchText}
          style={{ marginBottom: "8px", width: "600px" }}
        />
        <Table columns={columns} dataSource={filteredTickets} rowKey="_id" />
      </Modal>
      {editTicket && (
        <TicketEditForm
          visible={!!editTicket}
          onClose={() => setEditTicket(null)}
          ticket={editTicket}
          onUpdate={handleUpdate}
        />
      )}
      {detailsPopupVisible && selectedTicket &&(
        <TicketDetailsPopup
          visible={detailsPopupVisible}
          onClose={() => setDetailsPopupVisible(false)}
          ticket={selectedTicket}
        />
      )}
    </div>
  );
};

export default TicketListPopup;
