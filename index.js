var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(8000,()=>console.log('listening....'));

//static files
app.use(express.static('public'));


//socket setup
var io = socket(server);

io.on('connection',(socket)=>{
    console.log('start socket connection',socket.id);
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });
})