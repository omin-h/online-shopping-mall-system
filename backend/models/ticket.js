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
  }

});

const ticketList = mongoose.model('CustomerTickets', ticketSchema);

export { ticketList };
