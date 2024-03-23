// ticketController.js
import { ticketList } from '../models/ticket.js';

// Controller function to handle adding a new ticket
export async function addticket(req, res, next) {
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
        res.json(response);
    } catch (error) {
        console.error('Error occurred while saving ticket:', error);
        // Send a 500 Internal Server Error response if an error occurs
        res.status(500).json({ error: 'Error occurred while saving ticket' });
    }
}


export async function gettickets(req, res, next) {
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