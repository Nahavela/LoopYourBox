const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const historySchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    team: { type: String },
    status: { type: String }
});

historySchema.plugin(uniqueValidator);

module.exports = mongoose.model('History', historySchema);