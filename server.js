const express = require('express');
const app = express();
const db = require('./db');
const http = require('http');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/user',userRoutes);

app.get('/',(req,res)=>{

    res.send("Test");
});

const PORT = process.env.PORT || 5000;
var server = http.createServer(app).listen(8000, ()=>{"Server is running on ${PORT}"});

