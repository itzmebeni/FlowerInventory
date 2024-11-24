const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SalesSchema = new Schema({
    Product: {
        type: String,
        required: true
    },
    QuantitySold: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Total: {
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Sales', SalesSchema);
