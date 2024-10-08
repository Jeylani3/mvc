require('dotenv').config();
const mongoose = require('mongoose')
// require('dotenv').config();
const dburi = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dburi);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
module.exports = connectDB;
