import mongoose from 'mongoose';

const brandListSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    }
});

const brandList = mongoose.model('brandList', brandListSchema);

export { brandList };