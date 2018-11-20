//open connection

var socket = io.connect('http://localhost:8000');

//get dom
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

//emit events
btn.addEventListener('click',() =>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});

//listen for incomming messages
socket.on('chat',(data)=>{
    output.innerHTML += "<p><strong >"+ data.handle +"</strong>: "+data.message +"</p>";
});