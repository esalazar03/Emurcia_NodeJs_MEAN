var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
const morgan = require('morgan');
// Settings
var port = process.env.PORT || 3000; //puerto donde correrá


app.use(cors());
// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );

// Middlewares
app.use(morgan('dev'));
//app.use('/usuarios', Users);
app.use(express.json());

// Routes
app.use('/api/user',require('./routes/Users'));



// Start listening
app.listen(port, function() {
    console.log('Server is running on port: ' + port);
});