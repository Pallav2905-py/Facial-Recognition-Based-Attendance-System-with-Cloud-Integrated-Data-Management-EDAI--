require('./db/connection');
require("dotenv").config();
const Product = require('./models/product');
const productJson = require('./products.json');
require("./db/connection")
const start = async()=>{
    //?Delete Previous Data
    await Product.deleteMany()
    try {
        await Product.create(productJson);
        console.log("Done");
    } catch (error) {
        console.log(error);
    }
}

start();