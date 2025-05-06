// const cors = require('cors')
// const express=require("express")
// const {Server}=require("socket.io")
// const {createServer}=require("http")

// const app=express()
// const server=createServer(app)
// const io= new Server(server,{
//     cors: {
//       origin: "http://localhost:5173",
//       origin:"*"
//     }
//   });

// app.use(cors())


// require("dotenv").config()
// const port=process.env.PORT||3000

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))


// const route=require("./routes/route")
// app.use(route)

// const database=require("./config/database")
// database()

// app.get('/',(req,res)=>{res.send("Hi prayansh")})

// io.on('connection', (socket) => {
//     console.log(socket.id);
//     socket.on("sendtoall",(msg)=>{
//         console.log(msg)
//         socket.broadcast.emit("msgfromserver",msg)
//     })
//   });

// server.listen(port,()=>(console.log(`Server started at port ${port}`)))


// server/index.js

// server/index.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173", // Adjust this to your frontend URL
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

// Middleware
app.use(cors());

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('New client connected');

    // Handle offer
    socket.on('offer', (offer) => {
        console.log('Offer received:', offer);
        socket.broadcast.emit('offer', offer);
    });

    // Handle answer
    socket.on('answer', (answer) => {
        console.log('Answer received:', answer);
        socket.broadcast.emit('answer', answer);
    });

    // Handle ICE candidates
    socket.on('candidate', (candidate) => {
        console.log('Candidate received:', candidate);
        socket.broadcast.emit('candidate', candidate);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});