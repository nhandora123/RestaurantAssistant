const mongoose = require('mongoose');

let connectString = 'mongodb+srv://noras:So01684205241Mongodb@cluster0.auzaw.mongodb.net/RestaurantDemo?retryWrites=true&w=majority'

const connectDB = async () => {
    const conn = await mongoose.connect(connectString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log('Can not connect to mongodb' + err);
        }else{
            console.log('Connect to mongodb seccessful');
            
            }
        }
    )
}

module.exports = connectDB;


