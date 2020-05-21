const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Todos', new Schema({
    text: String,
    checked: Boolean
},
{ versionKey: false }));