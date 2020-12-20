const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserProfileSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, require: true, ref: 'users'},
    firstName: { type: String, required: false },
    middleName: { type: String, required: false },
    lastName: { type: String, required: false },
    birthday: { type: Date, required: false },
    address: { type: String, require: false },
    picture: { type: String, require: false }
})

UserProfileSchema.virtual('fullName')
    .get(function () {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    })
module.exports = mongoose.model('userProfiles', UserProfileSchema)