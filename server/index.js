var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', socket => {
  socket.on('action', message => {
    switch(message.type){
      case "SERVER_SEND_MESSAGE":
        io.emit('action', {
          type: "ADD_MESSAGE", 
          payload: {
            message: "Olá ! Você esta conversando com um BOT ! (que infelizmente só sabe responder isto :/ )",
            who: "them"
          }
        });
        break;
    }
  });
});

const PORT = 1233;

http.listen(PORT,() => {
  console.log(`Escutando na porta ${PORT}`);
});