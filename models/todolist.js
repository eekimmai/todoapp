const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

const todoitems = mongoose.model('todoitem', itemSchema);

module.exports = todoitems;