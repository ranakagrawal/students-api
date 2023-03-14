const mongoose = require("mongoose");
const { stringify } = require("querystring");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/students-api",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful")
}).catch((e)=>{
    console.log("No connection")
});