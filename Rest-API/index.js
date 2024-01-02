require("dotenv").config();
const express = require("express");
const app = express()
const PORT = process.env.PORT || 5000;
const { createProxyMiddleware } = require('http-proxy-middleware');

// app.listen(3000);

require("./db/connection")
const routes = require("./routes/attendance")

app.get("/",(req,res)=>{
    res.send("Hi, I am live");
})
var cors = require('cors')


app.use(cors())
app.use('/api',routes);

const start = async()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Listening on PORT ${PORT}`);
        });

    } catch (error) {
        console.log(error);
    }
}

start();
