const express = require('express');  //importing express.
const cors = require('cors');
const mongoose = require('mongoose');

const UserRouter = require('./routes/user');

require('dotenv').config();

const app = express(); //app which is express.
const port = process.env.PORT || 8080;

app.use(cors()); //use middleware which is cors.
app.use(express.json()); //by default.

const uri = process.env.ATLAS_URI; //connect to .env file.
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection; //connect to mongodb
connection.once('open', () =>{
    console.log('MongoDB connection established.');
});

app.use('/user', UserRouter);

app.listen(port, () =>{ //callback function
    console.log('Server is running at port: ' + port);
});