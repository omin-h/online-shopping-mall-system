import express from 'express';
import { addTicket, getTickets, updateTicket, deleteTicket, getTicketById } from '../controllers/ticketController.js';

const ticketrouter = express.Router();

ticketrouter.post('/', addTicket);
ticketrouter.get('/', getTickets); // Route for fetching all tickets
ticketrouter.put('/:id', updateTicket); // Route for updating a ticket
ticketrouter.delete('/:id', deleteTicket); // Route for deleting a ticket
ticketrouter.get('/:id', getTicketById); // Route for fetching a ticket by ID


export default ticketrouter;
