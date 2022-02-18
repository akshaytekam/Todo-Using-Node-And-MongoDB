// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var todoschema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Active"
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var todoList = module.exports = mongoose.model('todoList', todoschema);
module.exports.get = function (callback, limit) {
    todoList.find(callback).limit(limit);
}