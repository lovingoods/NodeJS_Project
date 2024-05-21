const mongoose = require("mongoose");
require('dotenv').config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // You can add other options here if needed
    });
    console.log('Database connected successfully');
} catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit the process with failure
}
}

module.exports = {connect};