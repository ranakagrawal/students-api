const express = require("express");
const app = express();

require("./db/conn");
const Student = require("./models/students");

const port = process.env.PORT || 3000

app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("Hello from the backend")
// });

app.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.listen(port,()=>{
    console.log(`Connection successful at ${port}`)
});