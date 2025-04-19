const express=require('express');
const app=express();
const http=require('http')
const Server=require('socket.io').Server 

const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})
io.on('connection',(socket)=>{
    console.log("a user connected")
    socket.on('chat message',(msg)=>{
        console.log(msg)
        io.emit('chat message',msg)
    })
    socket.on('disconnect',()=>{
        console.log("user disconnected")
    })
}
)
server.listen(3000,'0.0.0.0',()=>{
    console.log("server started on port 3000")
}
)