var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4200,()=>console.log('listening....'));

//static files
app.use(express.static('public'));


//socket setup
var io = socket(server);

io.on('connection',()=>{
    console.log('start socket connection');
})