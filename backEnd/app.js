require('dotenv').config();
const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const ConnectionDB = require('./config/db');
app.use(express.json());

//simple logger
if (process.env.NODE_ENV === 'dev') {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.originalUrl}`);
        next();
    })
}


app.get("/test", (req, res) => {
    res.send({ msg: "Hello World" });
});

const PORT = process.env.PORT || 5000;

ConnectionDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

