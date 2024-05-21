const mongoose = require("mongoose");
require('dotenv').config();
const User = require("../models/userModel")

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

const disconnect = async ()=> {
  await mongoose.connect.close();
};

// obj {firstName: req.body.firstName, email: req.body.email}
const findUser = async (obj)=> {
  User.findOne(obj);
}

const saveUser = async (newUser)=> {
  return await newUser.save();
}


module.exports = {connect, disconnect, findUser, saveUser};