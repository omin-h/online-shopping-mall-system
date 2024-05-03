import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Resolved'],
        default: 'Pending'
    },
    reply: {
        type: String,
        default: ''
    }
});

const ticketList = mongoose.model('CustomerTickets', ticketSchema);

export { ticketList };
