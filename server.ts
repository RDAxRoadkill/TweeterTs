import express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
import bodyparser = require('body-parser');
import routing from './routing';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
//local db
const mongoUrl = 'mongodb://localhost/tweeter'

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    // auth: {
    //  	user: process.env.dbUsername,
    //  	password: process.env.pwd
    // }
});

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
conn.once('open', () => {
    console.log('MongoDB connected.')
});

app.use(cookieParser())
app.use(bodyparser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyparser.json())
app.use(routing);
app.listen(process.env.PORT || 8000);


console.log("Server up");