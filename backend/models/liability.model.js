const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reliabilitySchema = new Schema({
    name: { type: String, required: true },
    monthlyPayment: Number,
    amount: Number,
    shortTerm: Boolean
});

const Reliability = mongoose.model('Reliability', reliabilitySchema);

module.exports = Reliability;