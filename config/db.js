const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
try {
    const connect = await mongoose.connect(MONGODB_URL)
    console.log(`MongoDB connected: ${connect.connection.host}`);
} catch(err) {
    console.log(err)
    console.error(err)
}
}

module.exports = db