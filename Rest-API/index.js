require("dotenv").config();
const express = require("express");
const app = express()
const PORT = process.env.PORT || 5000;

require("./db/connection")
const products_routes = require("./routes/attendance")

app.get("/",(req,res)=>{
    res.send("Hi, I am live");
})

app.use("/api/attendance",products_routes);

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
