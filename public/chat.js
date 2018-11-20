//open connection

var socket = io.connect('http://localhost:8000');

//get dom
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//emit events

//handle sending messages
btn.addEventListener('click',() =>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});

//handle message typing
message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value);
})

//listen for incomming messages
socket.on('chat',(data)=>{
    feedback.innerHTML ="";
    output.innerHTML += "<p><strong >"+ data.handle +"</strong>: "+data.message +"</p>";
});

//listen for message typing event
socket.on('typing',(data)=>{
    feedback.innerHTML = "<p><em>"+ data +" is typing a message</em>";
});
