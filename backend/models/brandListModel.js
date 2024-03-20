const mongoose = require('mongoose');

const brandListSchema = new mongoose.Schema({
    name: {
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

module.exports = brandList;
