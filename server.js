const express = require("express");
const app = express();
app.get("/demo1",(req,res)=>{
    res.send({"message":"welcome to demo1 request"});

});

let port = process.env.PORT || 8040;
app.listen(port,()=>{
    console.log("server started!!!!");
});