const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://hasan99:gabi123@cluster0.a8fu0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB connection error", error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening on ${server.address().port}`);
});

app.use('/api', router);
