const express = require("express")
const app = express();
const http = require("http")
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server)

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})


//for connection
io.on("connection", (socket) => {
    console.log("a user conected");
    socket.on("disconnect" , () => {
        console.log("a user disconnected");
    })

    socket.on("chat message" , (msg) => {
        io.emit("chat message", msg);
    })
})

server.listen(5000, () =>{
    console.log("now litsning on port5000");
})
