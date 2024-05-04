import mongoose from 'mongoose';

const prototypeSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

const Prototype = mongoose.model('Prototype', prototypeSchema);

export default Prototype;
