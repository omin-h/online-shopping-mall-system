import express from 'express';
import { addticket, gettickets } from '../controllers/ticketController.js';

const ticketrouter = express.Router();

ticketrouter.post('/', addticket);
ticketrouter.get('/', gettickets); // Route for fetching all tickets

export default ticketrouter;
