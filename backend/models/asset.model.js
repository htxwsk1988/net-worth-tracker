const { Schema } = require("mongoose");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    name: { type: String, required: true },
    amount: Number,
    shortTerm: Boolean
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;