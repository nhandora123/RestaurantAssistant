const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./src/config/database');
const authentication = require('./src/routes/Account/authentication.route')

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

connectDB();

const app = express();

const PORT = process.env.PORT || 1035;
// //Setting other
// app.use(helmet());

// app.use(morgan('combined'));
// app.use(cors())
// ////////////////////////////////////////////

//Setting return req and res
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
///////////////////////////////////////////

//Setting midleware view ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");
///////////////////////////////////////////

// // const isAuthenticated = function (req, res, next) {
// //     if (req.isAuthenticated()) {
// //         return next();
// //     }
// //     res.json({message: 'Please login or logup'})
// // }

//Setting real time Socket.io
var server = require("http").Server(app);
var io = require("socket.io")(server);

//Realtime
io.on("connection", function(socket){
    console.log("Co nguoi ket noi" +socket.id);

///////////////////////////////////////////    

    require("./src/realtime/index.realtime")(io, socket)
    
    //io.sockets.emit("GetAllTable", "abc");


///////////////////////////////////////////
    socket.on("disconnect", function (){
        console.log("disconnection")
    })
})
///////////////////////////////////////////

// //API
app.use("/api", require("./src/routes/router"))
app.get("/", (req, res)=>{
    res.render("home");
})
// ///////////////////////////////////////////


///////////////////////////////////////////
server.listen(PORT, () => console.log(`App running on port ${PORT}`));

// var express = require('express');
// var app = express();
// app.use(express.static("public"));
// app.set("view engine", "ejs");
// app.set("views", "./src/views");

// var server = require("http").Server(app);
// var io = require("socket.io")(server);

// io.on("connection", function(socket){
//     console.log("Co nguoi ket noi" +socket.id);

//     io.sockets.emit("abc", "aaaaaa")

//     socket.on("disconnect", function (){
//         console.log("disconnection")
//     })
// })

// app.get("/", function (req, res){
//     res.render("home");
// })

// server.listen(1035, ()=>console.log("App running on port 6001"));
