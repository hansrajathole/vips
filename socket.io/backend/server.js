const app = require("./src/app")
const connect = require("./src/db/db")

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', socket => {
    const roomId = socket.handshake.query.roomId;
    socket.join(roomId);

    console.log('New client connected');

    socket.on("chacha", msg => {
        console.log(msg);
        socket.to(roomId).emit('chacha', msg);
    });
});




const PORT = 3000

server.listen(PORT , ()=>{
    console.log("server is running");
    connect()
})  