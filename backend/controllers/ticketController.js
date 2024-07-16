// ticketController.js
import { ticketList } from '../models/ticket.js';

// Controller function to handle adding a new ticket
export async function addTicket(req, res, next) {
    try {
        // Create a new ticket object using data from the request body
        const ticket = new ticketList({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            issue: req.body.issue,

        });

        // Save the ticket to the database
        const response = await ticket.save();
        console.log('Ticket saved successfully:', response);
        // Send a JSON response indicating successful ticket creation
        res.json({ message: 'Ticket added successfully' });
    } catch (error) {
        console.error('Error occurred while saving ticket:', error);
        // Send a 500 Internal Server Error response if an error occurs
        res.status(500).json({ error: 'Error occurred while saving ticket' });
    }
}


export async function getTickets(req, res, next) {
    try {
        // Retrieve all tickets from the database
        const tickets = await ticketList.find();
        // Send a JSON response with the retrieved tickets
        res.json(tickets);
    } catch (error) {
        console.error('Error occurred while fetching tickets:', error);
        // Send a 500 Internal Server Error response if an error occurs
        res.status(500).json({ error: 'Error occurred while fetching tickets' });
    }
}


export async function updateTicket(req, res, next) {
    try {
        const ticketId = req.params.id;
        // Find the ticket by ID and update its properties
        const updatedTicket = await ticketList.findByIdAndUpdate(ticketId, req.body, { new: true });
        if (!updatedTicket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        // Send the updated ticket as a JSON response
        res.json(updatedTicket);
    } catch (error) {
        console.error('Error occurred while updating ticket:', error);
        res.status(500).json({ error: 'Error occurred while updating ticket' });
    }
}

export async function deleteTicket(req, res, next) {
    try {
        const ticketId = req.params.id;
        // Find the ticket by ID and delete it
        const deletedTicket = await ticketList.findByIdAndDelete(ticketId);
        if (!deletedTicket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        // Send a success message as a JSON response
        res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        console.error('Error occurred while deleting ticket:', error);
        res.status(500).json({ error: 'Error occurred while deleting ticket' });
    }
}

export async function getTicketById(req, res, next) {
    try {
        const ticketId = req.params.id;
        // Find the ticket by ID
        const ticket = await ticketList.findById(ticketId);
        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        // Send the ticket details as a JSON response
        res.json(ticket);
    } catch (error) {
        console.error('Error occurred while fetching ticket by ID:', error);
        res.status(500).json({ error: 'Error occurred while fetching ticket by ID' });
    }
}
