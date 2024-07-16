// TicketDetailsPopup.jsx

import React, { useState, useEffect } from "react";
import { Modal, Typography, notification } from "antd";
import axios from "axios";

const { Paragraph } = Typography;

const TicketDetailsPopup = ({ visible, onClose, ticket }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (visible) {
      fetchTicketDetails(ticket._id);
    }
  }, [visible, ticket]);

  const fetchTicketDetails = async (ticketId) => {
    try {
      const response = await axios.get(`http://localhost:5555/ticket/${ticketId}`);
      setDetails(response.data);
    } catch (error) {
      console.error("Error fetching ticket details:", error);
      notification.error({
        message: "Error",
        description: "Failed to fetch ticket details",
      });
    }
  };

  const getStatusColor = (status) => {
    if (status === "Pending") {
      return "red";
    } else if (status === "Resolved") {
      return "green";
    }
    return "black"; // Default color
  };


  return (
    <Modal
      title="Ticket Details"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={350}
    >
      {details && (
        <>
          <Paragraph>
            <strong>Issue:</strong> {details.issue}
          </Paragraph>
          <Paragraph>
            <strong>Reply:</strong> {details.reply}
          </Paragraph>
          <Paragraph style={{ color: getStatusColor(details.status) }}>
            <strong>Status:</strong> {details.status}
          </Paragraph>
        </>
      )}
    </Modal>
  );
};

export default TicketDetailsPopup;
