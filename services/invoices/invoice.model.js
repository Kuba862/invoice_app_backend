const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String
    },
    invoiceDate: {
        type: String
    },
    invoiceSellDate: {
        type: String
    },
    invoiceSellPlace: {
        type: String
    },
    carMileage: {
        type: Number
    }
})

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;