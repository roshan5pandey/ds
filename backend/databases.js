'use strict';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const db = process.env.DB;

module.exports = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......')).catch((err)=>{
        console.error(err);
    });
}