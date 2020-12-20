const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FoodItemSchema = new Schema({
    foodName: { type: String, required: true },
    catagoryId: { type: Schema.Types.ObjectId, required: true, ref: 'catagories' },
    status: { type: Boolean, required: true, default: false },
    description: { type: String, required: false },
    price: { type: Int16Array, required: true },
    tax: { type: Float32Array, required: true },
    siteId: { type: Number, required: true, ref: 'sites'},
    storeId: { type: String, required: true, ref: 'stores'}
})

module.exports = mongoose.model('foodItems', FoodItemSchema)