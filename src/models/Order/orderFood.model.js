const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderFoodSchema = new Schema({
    _id: false,
    foodId: { type: String, required: true },
    amount: { type: Number, require: true },
    dateCreated: { type: Date, require: true, default: Date.now },
    process: { type: Number, require: true, default: 1 },
    NoteDetail: { type: String, require: false },
    employeeCreated: {type: Schema.Types.ObjectId, require: true, ref: 'users'},
})

module.exports = OrderFoodSchema;